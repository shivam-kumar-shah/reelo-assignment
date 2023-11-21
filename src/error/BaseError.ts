export abstract class BaseError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly name: string,
    message: string
  ) {
    super(message);
  }

  abstract toString(): string;
}
