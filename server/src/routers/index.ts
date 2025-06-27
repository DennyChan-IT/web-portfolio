import { Router } from "express";
import { router as contactRouter } from "./contact.router";

export const apiRouter = Router();

// /api/v1/contacts
apiRouter.use('/contacts', contactRouter);
