import { Router } from "express";
import { checkSchema } from "express-validator";
import { getAllQuestions, getQuestionare } from "../controllers";
import { QueryQuestionSchema } from "../dto";
import { validator } from "../middlewares";

const questionRouter = Router();

questionRouter.get("/questions", getAllQuestions);

/**
 * Example Query for the post route - 
 * 
{
  "totalMarks":100,
  "split":[
    {
      "difficulty":"easy",
      "weightageInPercentage":10
    },
    {
      "difficulty":"medium",
      "weightageInPercentage":40
    },
    {
      "difficulty":"hard",
      "weightageInPercentage":50
    }
  ]
}
*/

questionRouter.post(
  "/questions",
  checkSchema(QueryQuestionSchema),
  validator,
  getQuestionare
);

export { questionRouter };
