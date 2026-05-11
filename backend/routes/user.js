const express  = require("express");
const { loginUser, signupUser } = require("../controllers/userControllers");


const router = express.Router();


//logoin
router.post("/login",loginUser)

// singup router

router.post('/signup', signupUser)



module.exports = router;