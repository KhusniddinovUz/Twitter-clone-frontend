import { ADD_ERROR, REMOVE_ERROR } from "../action/types";
const initialState = {
  msg: {},
};
const errors = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return {
        msg: action.payload,
      };
    case REMOVE_ERROR:
      return {
        msg: {},
      };
    default:
      return state;
  }
};

export default errors;
