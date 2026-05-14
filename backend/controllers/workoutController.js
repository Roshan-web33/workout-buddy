const mongoose = require('mongoose');
const Workout = require('../models/WorkoutModel');


// get all workouts
exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });

    res.status(200).json(workouts);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// get single workout
exports.getWorkout = async (req, res) => {

  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};


// create workout
exports.createWorkout = async (req, res) => {

  const { title, load, reps } = req.body;

  try {

    const workout = await Workout.create({
      title,
      load,
      reps
    });

    res.status(200).json(workout);

  } catch (error) {

    res.status(400).json({
      error: error.message
    });

  }
};


// delete workout
exports.deleteWorkout = async (req, res) => {

  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findByIdAndDelete(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};


// update workout
exports.updateWorkout = async (req, res) => {

  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findByIdAndUpdate(
    id,
    {
      ...req.body
    },
    {
      new: true
    }
  );

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};