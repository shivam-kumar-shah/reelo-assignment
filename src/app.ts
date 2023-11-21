import express from "express";
import { config } from "dotenv";
import { initServer } from "./lib";
import { questionRouter } from "./routes";
import { errorHandler } from "./middlewares/error";

config();

const app = express();
app.use(express.json());
app.use(questionRouter);

app.use(errorHandler);

initServer(app);
