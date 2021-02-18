import { GET_COMMENT } from '../action/types';
const initialState = [];

const comments = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT:
      let newState = [...state, ...action.payload];
      return newState;
    default:
      return state;
  }
};

export default comments;
