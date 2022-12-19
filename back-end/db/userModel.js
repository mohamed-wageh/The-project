const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const joi = require('joi')
const passwordComplexity = require("joi-password-complexity");

const UserSchema = new mongoose.Schema({
    FirstName:{type:String, required:true},
    LastName:{type:String, required:true},
    email: {
        type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
    },

    password: {
        type: String,
    required: [true, "Please provide a password!"],
    unique: false,
    },
})
UserSchema.methods.generateAuthToken=function(){
    const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"7d"})
    return token
};
const User = mongoose.model("user",UserSchema);
const validate = (data) =>{
    constschema = joi.object({
        FirstName:joi.string().required().label("First Name"),
        LastName:joi.string().required().label("Last Name"),
        email:joi.string().required().label("Email"),
        password:passwordComplexity().required().label("Password")
    });
    return mongoose.Schema.validate(data)
};
module.exports={user,validate};
