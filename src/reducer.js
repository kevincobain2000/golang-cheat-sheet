const exampleInitialState = {
  count: 0
};

const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case "ADD":
      return Object.assign({}, state, {
        count: state.count + 1
      });
    default:
      return state;
  }
};

export default reducer;
