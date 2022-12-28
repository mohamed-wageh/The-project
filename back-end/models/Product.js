const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        name:{type: String , required:true, unique:true},
        description:{type: String , required:true},
        categories: {type: Array},
        image: {
            public_id:{
                type:String , required:true
            },
            url:{
                type:String , required:true
            }
        },
        size: {type: Array},
        color: {type: Array},
        price: {type: Number , required: true},
        Stock:{type:Number , default:0},
        rating:{type:Number , default:5}
    },
    //to save the date ex:(created at: time , updated at: time)
    {timestamps: true}
);
module.exports = mongoose.model("Product" , ProductSchema);