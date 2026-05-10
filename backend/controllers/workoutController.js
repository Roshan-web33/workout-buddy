const { default: mongoose } = require('mongoose');
const Workout = require('../models/WorkoutModel');



// get all workouts
exports.getWorkouts = async(req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt: -1})

    if(!workouts) return res.status(400).json({error: "No enteries found"})
    res.status(200).json(workouts);
}

//get a single a workwout

exports.getWorkout = async(req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))return res.status(404).json({mgs:"No such workout"})
    const workout = await Workout.findById(id)
    if (!workout) return res.status(404).json({error: "No such workout"})
        
    res.status(200).json(workout)
}


// delete workout 
exports. deleteWorkout = async(req,res)=>{
    const {id} = req.params
    const workout  = await Workout.findByIdAndDelete(id)
     if(!mongoose.Types.ObjectId.isValid(id))return res.status(404).json({mgs:"No such workout"})

    if (!workout) return res.status(404).json({error: "No such workout"})
    res.status(200).json(workout)
}

// update the  workout

exports. updateWorkout = async(req,res)=>{
    const {id} = req.params
    const workout  = await Workout.findOneAndUpdate(
        {
            _id: id
        },
    {
        ...req.body
    })
     if(!mongoose.Types.ObjectId.isValid(id))return res.status(404).json({mgs:"No such workout"})

    if (!workout) return res.status(404).json({error: "No such workout"})
    res.status(200).json(workout)
}







// create workout 

exports.createWorkout =  async(req,res)=>{

     const{title, load, reps} = req.body;

     
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)

    }catch(error){
        res.status(400).json({error: error.message})

    }
    res.json({
        message:"Post a new workout"
    })
} 