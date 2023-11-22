import { Questionaire } from "../models";
import { Question } from "../types";
import { QueryQuestionDTO } from "../dto";

const filterQuestions = (questions: Question[], marks: number) => {
  // Sliding window technique
  questions = questions.sort((a, b) => a.marks - b.marks);
  let i = 0,
    j = 0,
    tempMarks = 0;
  let ans: Question[] = [];
  while (j < questions.length && i <= j) {
    if (tempMarks == marks) break;
    if (tempMarks < marks) {
      tempMarks += questions[j].marks;
      ans.push(questions[j]);
      j++;
    } else {
      tempMarks -= questions[i].marks;
      ans.shift();
      i++;
    }
  }
  return ans;
};

export const prepareQuestionare = async (query: QueryQuestionDTO) => {
  const { split, totalMarks } = query;
  let answer: Question[] = [];
  for (let i = 0; i < split.length; i++) {
    const { difficulty, weightageInPercentage } = split[i];
    const marks = Math.floor((weightageInPercentage * totalMarks) / 100);
    const allQuestions = await Questionaire.Instance.queryData(
      (item) => item.difficulty === difficulty
    );
    const questions = filterQuestions(allQuestions, marks);
    answer = answer.concat(questions);
  }
  return answer;
};
