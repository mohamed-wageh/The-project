// bndef el express
const express = require('express');
// bndef el mongoose
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5005;
const userRouter = require("./routes/user")
dotenv.config();
const app = express();
mongoose.set('strictQuery', true);
mongoose.connect(
    process.env.DB_URL).then(() => console.log("db connect")).catch((err) => {
    console.log(err);
});

app.use("/api/user", userRouter); //we go to api end user our app

app.listen(PORT, console.log(`server run in ${PORT}`));