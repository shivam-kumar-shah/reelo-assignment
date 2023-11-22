import { config } from "dotenv";
import express from "express";
import { initServer } from "./lib";
import { errorHandler } from "./middlewares";
import { questionRouter } from "./routes";

config();

const app = express();
app.use(express.json());
app.use(questionRouter);

app.use(errorHandler);

initServer(app);
