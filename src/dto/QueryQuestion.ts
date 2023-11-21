import { Schema } from "express-validator";
import { Difficulty } from "../types/enums/DifficultyEnum";

export interface QueryQuestion {
  totalMarks: number;
  split: {
    difficulty: Difficulty;
    weightageInPercentage: number;
  }[];
}
export const QueryQuestionSchema: Schema = {
  totalMarks: {
    in: ["body"],
    notEmpty: true,
    isInt: true,
    toInt: true,
    errorMessage: "Invalid value for totalMarks property",
  },
  "split.*.difficulty": {
    in: ["body"],
    notEmpty: true,
    isIn: {
      options: [Object.values(Difficulty)],
    },
    errorMessage: "Invalid value for difficulty property",
  },
  "split.*.weightageInPercentage": {
    in: ["body"],
    notEmpty: true,
    isInt: true,
    toInt: true,
    errorMessage: "Invalid value for weightageInPercentage property",
  },
};
