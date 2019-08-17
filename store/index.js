import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

export const makeStore = initialState => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};
