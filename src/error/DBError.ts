export class DBError extends Error {
  constructor(public readonly name: string, public readonly message: string) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }

  toString() {
    return `${this.name}: ${this.message}`;
  }
}
