import { Router } from "express";
import { getAllQuestions, getQuestionare } from "../controllers";

const questionRouter = Router();

questionRouter.get("/questions", getAllQuestions);

questionRouter.post("/questions", getQuestionare);

export { questionRouter };
