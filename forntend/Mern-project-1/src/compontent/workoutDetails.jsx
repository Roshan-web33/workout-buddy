import React from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutContext'

const WorkoutDetails = ({workout}) => {
  
  const {dispatch} = useWorkoutsContext();

  const handleClick = async()=>{
    const response = await fetch('http://localhost:3000/api/workouts/'+ workout._id ,{
      method: "DELETE"
    })

    const json = await response.json();

    if(response.ok){
      dispatch({type: "DELETE_WORKOUT", payLoad: json})
    }

  }
  return (
    <div className='workout-details relative bg-white w-full pl-8 h-[13%] pt-5 shadow shadow-gray-500 '>
      <h4 className='font-bold text-xl text-green-700 mb-2'>{workout.title}</h4>
      <p className='text-[80%]'><strong>Load (in Kgs):</strong>{workout.load}</p>
      <p className='text-[80%]'><strong>Reps:</strong>{workout.reps}</p>
      <p className='text-[80%]'>{workout.createdAt}</p>
      <span className=' absolute top-5 right-10 bg-gray-300 p-2 cursor-pointer  rounded-2xl' onClick={handleClick}><i class="ri-delete-bin-line"></i></span>

    </div>
  )
}

export default WorkoutDetails
