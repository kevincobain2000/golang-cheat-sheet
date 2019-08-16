import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

/**
 * Install redux-dev-tools extension on chrome
 *
 */
// const reduxDevtools =
//   typeof window !== "undefined" && process.env.NODE_ENV !== "production"
//     ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION__()
//     : f => f;

const enhancers = compose(
  applyMiddleware(thunk)
  // reduxDevtools
);

export const makeStore = initialState => {
  return createStore(reducers, initialState, enhancers);
};
