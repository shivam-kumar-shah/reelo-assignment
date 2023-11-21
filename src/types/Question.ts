import { Difficulty } from "./enums/DifficultyEnum";
import { Subject } from "./enums/SubjectEnum";

export interface Question {
  statement: string;
  subject: Subject;
  topic: string;
  difficulty: Difficulty;
  marks: number;
}
