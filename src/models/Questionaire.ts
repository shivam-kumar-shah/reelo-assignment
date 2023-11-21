import { JsonDB } from "node-json-db";
import { DB } from "../repositories";
import { DBConfig, Question } from "../types";

export class Questionaire extends DB<Question> {
  private static _instance: Questionaire;

  constructor(path: string = "/questions") {
    super(path);
  }

  public static get Instance() {
    if (!this._instance) {
      this._instance = new Questionaire();
    }
    return this._instance;
  }
}
