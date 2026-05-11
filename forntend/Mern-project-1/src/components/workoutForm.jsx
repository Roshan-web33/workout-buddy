import React, { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutContext';

const WorkoutForm = () => {

    const {dispatch} = useWorkoutsContext()
    const[title, setTitle] = useState("");
    const[load, setLoad] = useState('');
    const[reps, setReps] = useState('');
    const[error, setError] = useState(null);
    const [emtyFields, setEmptyFields] = useState([]);


    const handleSubmit=async(e)=>{
        e.preventDefault();

        const workout = {title,load,reps};
        const response = await fetch("http://localhost:3000/api/workouts"
            ,{
            method: "POST",
            body: JSON.stringify(workout),
            headers:{
                "content-type": "application/json"
            }
            
        }
        )

        const json = await response.json();
        if(!response.ok){
            setError(json.error)
        }else{
             setError(null)
        setTitle("");
        setLoad("");
        setReps("");
        setEmptyFields("");
        console.log("New Workout Added",json)
        dispatch({
   type: "CREATE_WORKOUT",
   payLoad: json
})
        

        }

       
    }
  return (
    <form onSubmit={handleSubmit} className='create flex gap-5 w-[20%] flex-col'>
        <h3 className='font-bold'>Add a New Workout</h3>
        <label>Excerise Title:</label>
        <input className='bg-white w-[100%]' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
         <label>Load (in Kgs):</label>
        <input className='bg-white w-[100%]' type="number" value={load} onChange={(e) => setLoad(e.target.value)} />
         <label>Reps:</label>
        <input className='bg-white w-[100%]' type="number" value={reps} onChange={(e) => setReps(e.target.value)} />

        <button type='submit' className='p-3 bg-green-700 w-[40%] font-blod text-white'>Add Workout</button>
    {error && <div className='text-red-600'>{error}</div>}
    </form>
  )
}

export default WorkoutForm
