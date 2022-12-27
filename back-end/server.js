// bndef el express
const express = require("express");
// bndef el mongoose
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const PORT = process.env.PORT || 5005;
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const app = express();
app.use(cors())
dotenv.config();
mongoose.set('strictQuery', true);
mongoose.connect(
    process.env.DB_URL).then(() => console.log("db connect")).catch((err) => {
        console.log(err);
    });

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter); //we go to api end user our app
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.listen(PORT, console.log(`server run in ${PORT}`));