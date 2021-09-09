export const initialState = {
  bascket: [],
  user: null,
};
const reducer = (state, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case "ADD_TO_BASCKET":
      return {
        ...state,
        bascket: [...state.bascket, action.item],
      };
    case "REMOVE_FROM_BASCKET":
      return {
        ...state,
        bascket: state.bascket.filter((item) => item.id !== action.id),
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
