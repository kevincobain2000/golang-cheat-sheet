import { createStore } from "redux";
import reducer from "./reducer";

const exampleInitialState = {
  count: 0
};

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState);
};
