const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require('cors')

 const workoutRoutes = require("./routes/workout")
 const userRoutes = require('./routes/user')
dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());




app.use("/api/workouts/",workoutRoutes)
app.use("/api/user",userRoutes)

mongoose.connect(process.env.MONGO_URI).then(()=>{app.listen(process.env.PORT,()=>{
    console.log("your server started and coceted to db");
    
})}).catch((error)=>{console.log(error);
})


app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next();
    
    
})

app.get('/',(req,res)=>{
    res.json({msg:"welcome to our appln"})
})


