// external imports

// import bcrypt from 'bcrypt';
const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require("./db/dbConnect.js");
const bcrypt = require("bcrypt");
const User = require("./db/userModel.js");
const bodyParser = require('body-parser');


dotenv.config();
dbConnect();
const app = express();
app.use(bodyParser.json());

app.listen(5004, console.log("server is running port 5004 ....."));

// register endpoint
app.post("/register", (request, response) => {
    // hash the password
    bcrypt
      .hash(request.body.password, 10)
      .then((hashedPassword) => {
        // create a new user instance and collect the data
        const user = new User({
          email: request.body.email,
          password: hashedPassword,
        });
  
        // save the new user
        user
          .save()
          // return success if the new user is added to the database successfully
          .then((result) => {
            response.status(201).send({
              message: "User Created Successfully",
              result,
            });
          })
          // catch error if the new user wasn't added successfully to the database
          .catch((error) => {
            response.status(500).send({
              message: "Error creating user",
              error,
            });
          });
      })
      // catch error if the password hash isn't successful
      .catch((e) => {
        response.status(500).send({
          message: "Password was not hashed successfully",
          e, 
        });
      });
  });
  

app.get("/",(req,res) => {
    res.send("api is running...");
});

const PORT =process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in ${PORT}`));
