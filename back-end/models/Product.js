const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        name:{type: String , required:true, unique:true},
        description:{type: String , required:true},
        brand:{type: String , required:true},
        categories: {type: Array},
        image: {type: String , required: true},
        size: {type: Array},
        color: {type: Array},
        size: {type: Array},
        color: {type: Array },
        price: {type: Number , required: true},
        inStock:{type:Boolean , default:true,},
    },
    //to save the date ex:(created at: time , updated at: time)
    {timestamps: true}
);
module.exports = mongoose.model("Product" , ProductSchema);