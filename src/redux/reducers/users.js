import {
  GET_LAST_USERS,
  SEARCH_USERS,
  CLEAR_SEARCH_USERS,
} from "../action/types";

const initialState = {
  lastusers: [],
  foundusers: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_LAST_USERS:
      return {
        ...state,
        lastusers: action.payload,
      };
    case SEARCH_USERS:
      return {
        ...state,
        foundusers: action.payload,
      };
    case CLEAR_SEARCH_USERS:
      return {
        ...state,
        foundusers: [],
      };
    default:
      return state;
  }
};

export default users;
