import mongoose, { Schema } from "mongoose";

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  export const ContactModel = mongoose.model("Contact", contactSchema);