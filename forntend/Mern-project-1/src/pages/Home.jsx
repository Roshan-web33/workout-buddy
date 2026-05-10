import React, { useEffect, useState } from 'react'
import WorkoutDetails from '../compontent/workoutDetails'
import WorkoutForm from '../compontent/workoutForm'
import { useWorkoutsContext } from '../hooks/useWorkoutContext'




const Home = () => {
    // const[workout, setWorkout] = useState([])
    const {workouts,dispatch} = useWorkoutsContext()

    useEffect(() =>{
        const fetchWorkouts = async()=>{
           const response =  await fetch('http://localhost:3000/api/workouts')
           const json = await response.json();

           if(response.ok){

   
            dispatch({type: "SET_WORKOUTS",payLoad: json})

           }

        }
        fetchWorkouts();
    },[dispatch])


    // key={workout._id}
  return (
    <div>
      <div className='home bg-gray-100 h-screen  flex pl-50  gap-50 pt-10 '>
      <div className="wokouts  flex flex-col w-[60%] gap-10">
        {
       workouts && workouts.map((workout) => (
        <WorkoutDetails key={workout._id} workout={workout} />
        ))
      }
      </div>
      <WorkoutForm/>

    </div>

    </div>
    
  )
}

export default Home
