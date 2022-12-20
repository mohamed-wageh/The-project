const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema(
    {
        userId:{type: String , required:true, unique:true},
        Products:[
            {
                productId:{
                    type:String
                },
                ProductQuantity:{
                    type:Number, 
                    default:1,
                }
            }
        ],
    },
    //to save the date ex:(created at: time , updated at: time)
    {timestamps: true}
);
module.exports = mongoose.model("Cart" , CartSchema);