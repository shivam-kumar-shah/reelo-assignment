import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import { HttpError } from "../error";

export const validator: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorArray = errors.formatWith(
      (error) => new HttpError(error.type, error.msg, 422)
    );
    throw errorArray.array()[0];
  }
  next();
};
