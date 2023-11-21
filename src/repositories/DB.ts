import { JsonDB, FindCallback, Config } from "node-json-db";
import { DBConfig } from "../types";

export abstract class DB<T> {
  private static _db: JsonDB;
  private static _config: DBConfig = { filename: "db" };

  constructor(protected _path: string) {
    DB.DBInstance;
  }

  public static get DBInstance() {
    if (!DB._db) {
      const { filename, humanReadable, saveOnPush } = DB._config;
      const config = new Config(filename, saveOnPush, humanReadable);
      DB._db = new JsonDB(config);
    }
    return DB._db;
  }

  public static setDBConfig(config: DBConfig) {
    DB._config = config;
  }

  async get(): Promise<T[]> {
    const result = await DB.DBInstance.getObjectDefault<T[]>(this._path, []);
    return result;
  }

  async findOne(data: T): Promise<T | undefined> {
    const result = await DB.DBInstance.find<T>(
      this._path,
      (item) => item === data
    );
    return result;
  }

  async queryData(filterFunction: (item: T) => boolean): Promise<T[]> {
    const result = await DB.DBInstance.filter<T>(this._path, filterFunction);
    return result ?? [];
  }

  async delete(data: T): Promise<void> {
    const result = await DB.DBInstance.filter<T>(
      this._path,
      (item) => item != data
    );
    await DB.DBInstance.push(this._path, result, true);
  }

  async post(data: T): Promise<void> {
    await DB.DBInstance.push(this._path, data, false);
  }

  async put(data: T): Promise<void> {
    const result =
      (await DB.DBInstance.filter<T>(this._path, (item) => item != data)) || [];
    await DB.DBInstance.push(this._path, [...result, data], true);
  }
}
