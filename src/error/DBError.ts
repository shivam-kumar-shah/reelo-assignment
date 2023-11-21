import { BaseError } from "./BaseError";

export class DBError extends BaseError {
  constructor(name: string, message: string) {
    super(500, name, message);
    Error.captureStackTrace(this, this.constructor);
  }
}
