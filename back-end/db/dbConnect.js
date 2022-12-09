// external imports
import mongoose from "mongoose";

const dbConnect = async() =>{
  try{
    const connection = await mongoose.connect(process.env.DB_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongo is connected");
  }catch(error){
    console.log(`error: ${error.message}`)
    process.exit(1) 
  }
};

mongoose.set('strictQuery',true);
export default dbConnect;