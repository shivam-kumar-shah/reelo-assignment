import { BaseError } from "./BaseError";

export class HttpError extends BaseError {
  constructor(name: string, message: string, statusCode: number) {
    super(statusCode, name, message);
    Error.captureStackTrace(this, this.constructor);
  }

  toString() {
    return `${this.statusCode}: ${this.name}, ${this.message}`;
  }
}
