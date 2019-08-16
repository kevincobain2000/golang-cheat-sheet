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

export const searchMarkdownJson = (
  fuse: any,
  items: any,
  name: string
) => async (dispatch: Dispatch) => {
  let _items = [];
  if (name && name.trim()) {
    _items = fuse.search(name);
  } else {
    _items = items;
  }

  return dispatch({ type: actions.SEARCH_JSON_FILE, items: _items });
};
