

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const validator = require("validator")
const Schema = mongoose.Schema



const userSchema = new Schema ({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    }
})


//static singup method

userSchema.statics.signup = async function(email,password){
    const exists = await this.findOne({email});
    
    if(!email || !password){
        throw Error("All fieds are menadatory")
    }
    if(!validator.isEmail (email)){
        throw Error("Email is not valid")
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Password is not strong")
    }


    if(exists){
        throw Error("Emaily already exists!");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({email, password:hash})
    return user
}

// static login method

userSchema.static.login = async function name(email,password) {
         if(!email || !password){
        throw Error("All fieds are menadatory")
    }      
        const user = await this.findOne({email});

         if(exists){
        throw Error("Incrrect Email");
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error("incrroct password")
    }
    return user
}



module.exports = mongoose.model("user",userSchema)


