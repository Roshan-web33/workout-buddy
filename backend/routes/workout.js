const express = require("express");
const Workout  = require("../models/WorkoutModel")
const {createWorkout} = require("../controllers/workoutController")
const {getWorkouts} = require("../controllers/workoutController")
const {getWorkout} = require("../controllers/workoutController")
const {deleteWorkout} = require("../controllers/workoutController")
const {updateWorkout} = require("../controllers/workoutController")
const router = express.Router();


// Route: /api/workouts:id
// Method: GET
// Description: Get a single workout by its ID
// Access: Public 
// Parameters: None
router.get('/', getWorkouts )


// Route: /api/workouts:id
// Method: GET
// Description: Get a single workout by its ID
// Access: Public 
// Parameters: None
router.get('/:id', getWorkout )



// Route: /api/workouts
// Method: Post
// Description: Create new workout
// Access: Public 
// Parameters: None
router.post('/', createWorkout)



// Route: /api/workouts:id
// Method: Delete
// Description: Delete a  workout by its ID
// Access: Public 
// Parameters: None
router.delete('/:id', deleteWorkout )



// Route: /api/workouts:id
// Method: PATCH
// Description: Upadate single workout by its ID
// Access: Public 
// Parameters: None
router.patch('/:id', updateWorkout )






module.exports = router