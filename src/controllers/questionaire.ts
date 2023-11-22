import { RequestHandler } from "express";
import { QueryQuestionDTO } from "../dto";
import { prepareQuestionare } from "../lib";
import { Questionaire } from "../models";
import { ApiResponse } from "../types";

export const getAllQuestions: RequestHandler<{}, ApiResponse> = async (
  req,
  res,
  next
) => {
  const result = await Questionaire.Instance.get();
  const response: ApiResponse = {
    statusCode: 200,
    message: "Got all questions",
    data: result,
  };
  res.status(response.statusCode).send(response);
};

export const getQuestionare: RequestHandler<
  {},
  ApiResponse,
  QueryQuestionDTO
> = async (req, res, next) => {
  const result = await prepareQuestionare(req.body);
  const response: ApiResponse = {
    statusCode: 200,
    message: "Got queried questions",
    data: result,
  };
  res.status(response.statusCode).send(response);
};
