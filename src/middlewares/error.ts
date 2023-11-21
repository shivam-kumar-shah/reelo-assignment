import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = async (
  error,
  req,
  res,
  next
) => {
  console.log(error.toString());
  res.status(error.statusCode || 500).send({
    name: error.name,
    message: error.message,
    statusCode: error.statusCode,
  });
};
