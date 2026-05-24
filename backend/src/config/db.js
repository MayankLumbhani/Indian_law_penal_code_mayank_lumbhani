import mongoose from "mongoose";
import env from "./env.js"

const connectDB = async () => {
  try{
    await mongoose.connect(env.MONGO_URI);
    console.log("Mongodb connected successfully.");
  }
  catch(error){
    console.log("Mongodb connection failed",error);
    process.exit(1);
  }
}

export default connectDB;