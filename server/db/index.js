import mongoose from "mongoose";

const Connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb is connected...");
  } catch (e) {
    console.log("Something wrong with MongoDB connection...");
  }
};

export default Connect;
