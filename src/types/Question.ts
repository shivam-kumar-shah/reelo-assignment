import { Difficulty, Subject } from "./enums";

export interface Question {
  statement: string;
  subject: Subject;
  topic: string;
  difficulty: Difficulty;
  marks: number;
}
