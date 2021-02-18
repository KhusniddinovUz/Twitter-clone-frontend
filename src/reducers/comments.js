import { GET_COMMENT, CREATE_COMMENT } from '../action/types';
const initialState = [];

const comments = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT:
      let newState = [...state, ...action.payload];
      return newState;
    case CREATE_COMMENT:
      let newState2 = [...state];
      newState2.push(action.payload);
      return newState2;
    default:
      return state;
  }
};

export default comments;
