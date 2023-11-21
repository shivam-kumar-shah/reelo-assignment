import { Questionaire } from "../models";
import { Question } from "../types";
import { QueryQuestion } from "../dto";

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

export const prepareQuestionare = (query: QueryQuestion) => {
  const { split, totalMarks } = query;
  let answer: Question[] = [];
  split.forEach(async (item) => {
    const { difficulty, weightageInPercentage } = item;
    const marks = Math.floor((weightageInPercentage * totalMarks) / 100);
    const allQuestions = await Questionaire.Instance.queryData(
      (item) => item.difficulty === difficulty
    );
    const questions = filterQuestions(allQuestions, marks);
    answer = answer.concat(questions);
  });
  return answer;
};
