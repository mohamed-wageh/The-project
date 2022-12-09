// external imports
import express from 'express';
import dotenv from 'dotenv';
import dbConnect from "./db/dbConnect.js";


dotenv.config();
dbConnect();
const app = express();

app.listen(5004, console.log("server is running port 5004 ....."));

app.get("/",(req,res) => {
    res.send("api is running...");
});

const PORT =process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in ${PORT}`));
