const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
    info:{
        name:{type: String , required:true, unique:true},
        description:{type: String , required:true},
        categories: {type: Array},
        image: {type: String , required: true},
        size: {type: String},
        color: {type: String },
        price: {type: Number , required: true}
    },
},
    //to save the date ex:(created at: time , updated at: time)
    {timestamps: true}
);
module.exports = mongoose.model("Product" , ProductSchema);