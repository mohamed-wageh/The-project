const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema(
    {
        email: {type: String , required: true},
        password: {type: String , required: true},
        firstName:{type: String ,required:true},
        lastName:{type: String ,required:true},
        phone:{type:Number , required:true , unique: true},
        isAdmin: {
            type:Boolean, default:false,
        },
        avatar:{type: String},
    },
    //to save the date ex:(created at: time , updated at: time)
    {timestamps: true}
);
module.exports = mongoose.model("user" , UserSchema);