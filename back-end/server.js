// bndef el express
const express = require("express");
// bndef el mongoose
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5005;
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const productRouter = require("./routes/auth");
const app = express();
dotenv.config();
mongoose.set('strictQuery', true);
mongoose.connect(
    process.env.DB_URL).then(() => console.log("db connect")).catch((err) => {
    console.log(err);
});

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter); //we go to api end user our app
app.use("/api/products", userRouter);
app.listen(PORT, console.log(`server run in ${PORT}`));