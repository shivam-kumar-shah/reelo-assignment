import { Router } from "express";
import { checkSchema } from "express-validator";
import { getAllQuestions, getQuestionare } from "../controllers";
import { QueryQuestionSchema } from "../dto";
import { validator } from "../middlewares";

const questionRouter = Router();

questionRouter.get("/questions", getAllQuestions);

questionRouter.post(
  "/questions",
  checkSchema(QueryQuestionSchema),
  validator,
  getQuestionare
);

export { questionRouter };
