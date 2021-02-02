import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  USER_LOADED,
  USER_NOTLOADED,
} from '../action/types';

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem('twitter-token'),
  username: null,
  email: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      localStorage.setItem('twitter-token', action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.user.username,
        email: action.payload.user.email,
        token: localStorage.getItem('twitter-token'),
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        email: action.payload.email,
        username: action.payload.username,
      };
    case USER_NOTLOADED:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default auth;
