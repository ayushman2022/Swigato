import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Swigato:Rez4wA9YJ2JeEgby@cluster0.28uf5.mongodb.net/swigato').then(()=>console.log("Database Connected"));
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};