import express from "express";
import { config } from "dotenv";
import { initServer } from "./lib";
import { questionRouter } from "./routes";

config();

const app = express();
app.use(questionRouter);

initServer(app);
