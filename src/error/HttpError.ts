export class HttpError extends Error {
  constructor(
    public readonly name: string,
    public readonly message: string,
    public readonly statusCode: number
  ) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }

  toString() {
    return `${this.statusCode}: ${this.name}, ${this.message}`;
  }
}
