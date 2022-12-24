const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema(
    {
        email: {type: String , required: true},
        password: {type: String , required: true},
        username:{type: String , required:true, unique:true},
        firstName:{type: String ,required:true},
        lastName:{type: String ,required:true},
        isAdmin: {
            type:Boolean, default:false,
        },
    },
    //to save the date ex:(created at: time , updated at: time)
    {timestamps: true}
);
UserSchema.path('email').validate(async(email)=>{
    const emailCount = await mongoose.models.users.countDocuments({ email })
    return !emailCount
}, 'Email already exists');
module.exports = mongoose.model("user" , UserSchema);