export abstract class BaseError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly name: string,
    message: string
  ) {
    super(message);
  }

  toString() {
    return `${this.statusCode}: ${this.name}, ${this.message}`;
  }
}
