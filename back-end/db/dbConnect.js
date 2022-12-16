// external imports
const mongoose = require("mongoose");

const dbConnect = async() =>{
  try{
    const connection = await mongoose.connect(process.env.DB_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log(`mongo is connected: ${conn.connection.host}`);
  }catch(error){
    console.log(`error: ${error.message}`)
    process.exit(1) 
  }
};

mongoose.set('strictQuery',true);
module.exports = dbConnect;