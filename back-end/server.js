// bndef el express
const express = require("express");
// bndef el mongoose
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cloudinary = require('cloudinary')
const cors = require("cors");
const PORT = process.env.PORT || 5005;
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const bannerRouter = require("./routes/banner")
//const paypalRouter = require("./routes/paypal");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
//cloudinary.config({
  //  cloud_name: 'dpddogoro',
    //api_key: '195523127174162',
    //api_secret: 'QMzrQMfg-mGKk96B3HZIKyoQTHs'
//});


dotenv.config();
mongoose.set('strictQuery', true);
mongoose.connect(
    process.env.DB_URL).then(() => console.log("db connect")).catch((err) => {
        console.log(err);
    });
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter); //we go to api end user our app
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/banner" , bannerRouter);
//app.use("/api/paypal/payment" , paypalRouter) , 
app.listen(PORT, console.log(`server run in ${PORT}`));