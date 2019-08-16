import actions from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case actions.READ_JSON_FILE:
      return { ...state, items: action.items };

    default:
      return state;
  }
};
