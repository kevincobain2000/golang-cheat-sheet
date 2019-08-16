import actions from "./index";
import { Dispatch } from "redux";

export const getMarkdownJson = (filename: string) => async (
  dispatch: Dispatch
) => {
  const items: object = require("../../Cheatsheets/json/" +
    filename +
    ".md.json");
  return dispatch({ type: actions.READ_JSON_FILE, items: items });
};
