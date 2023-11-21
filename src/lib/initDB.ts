import { DB } from "../repositories";
import { DBConfig } from "../types";

export const initDB = (config: DBConfig) => {
  DB.setDBConfig(config);
};
