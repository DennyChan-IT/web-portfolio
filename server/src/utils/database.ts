import mongoose from "mongoose";
import { config } from "dotenv";

config();

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("🛑 MONGODB_URI is not defined in .env");
  }
  await mongoose.connect(uri);
};
