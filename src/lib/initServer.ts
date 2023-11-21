import { Express } from "express";
import { initDB } from "./initDB";

export const initServer = (app: Express) => {
  try {
    const PORT = process.env.PORT || "5000";
    initDB({ filename: "database", humanReadable: true, saveOnPush: true });
    app.listen(PORT, () => {
      console.log("Server listening on http://localhost:" + PORT);
    });
  } catch (err) {
    console.log(err);
  }
};
