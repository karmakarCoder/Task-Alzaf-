export const reducer = (state, action) => {
  if (action.type == "data") {
    return { ...state, allData: action.payload };
  }
  return state;
};
