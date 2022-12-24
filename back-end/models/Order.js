const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        userId:{type: String , required:true},
        products:[
            {
                productId:{
                    type:String
                },
                purchasedQuantity:{
                    type:Number, 
                    default:1,
                },
            },
        ],
        userAddress:{type:Object ,required: true},
        totalAmount: {type:Number ,required: true},
        orderStatus:{type:String , default:"Pending"},
    },
    //to save the date ex:(created at: time , updated at: time)
    {timestamps: true}
);
module.exports = mongoose.model("Order" , OrderSchema);