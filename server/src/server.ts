import { config } from "dotenv";
import express from "express";
import cors from 'cors';
import { apiRouter } from "./routers";
import { connectDB } from "./utils/database";

config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/v1', apiRouter);

app.listen(process.env.PORT, () => {
    console.log(`[server]: Listening at http:${process.env.PORT}`);
  });
  