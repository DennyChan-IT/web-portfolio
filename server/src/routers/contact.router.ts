import { Router } from "express";
import { createContact, getContact } from "../controller/contact.controller";

export const router = Router();

router.get("/", getContact);
router.post("/", createContact);