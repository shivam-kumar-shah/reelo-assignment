import { Difficulty } from "./enums/DifficultyEnum";

export interface QueryQuestion {
  totalMarks: number;
  split: {
    difficulty: Difficulty;
    weightageInPercentage: number;
  }[];
}
