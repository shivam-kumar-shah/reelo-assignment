import { Router } from "express";
import { getAllQuestions, getQuestionare } from "../controllers";
import { checkSchema } from "express-validator";
import { QueryQuestionSchema } from "../dto";
import { validator } from "../middlewares/validator";

const questionRouter = Router();

questionRouter.get("/questions", getAllQuestions);

questionRouter.post(
  "/questions",
  checkSchema(QueryQuestionSchema),
  validator,
  getQuestionare
);

export { questionRouter };
