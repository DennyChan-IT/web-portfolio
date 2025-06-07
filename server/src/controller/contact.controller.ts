import { Request, Response } from "express";
import { ContactModel } from "../models/contact.schema";

export const getContact = async (req: Request, res: Response) => {
    const contacts = await ContactModel.find()
    res.status(200).json(contacts);
};

export const createContact = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new ContactModel({ name, email, message });
    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};
