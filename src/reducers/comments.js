import { GET_COMMENT, CREATE_COMMENT } from '../action/types';
const initialState = [];

const comments = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT:
      const ids = new Set(state.map((d) => d.id));
      const newState = [
        ...state,
        ...action.payload.filter((d) => !ids.has(d.id)),
      ];
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
