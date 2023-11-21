import { ErrorRequestHandler } from "express";
import { BaseError } from "../error/BaseError";

export const errorHandler: ErrorRequestHandler = async (
  error,
  req,
  res,
  next
) => {
  return res.status(error.statusCode || 500).send({
    name: error.name,
    message: error.message,
    statusCode: error.statusCode,
  });
};
