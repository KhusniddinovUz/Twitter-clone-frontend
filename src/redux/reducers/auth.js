import {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  USER_LOADED,
  USER_NOTLOADED,
} from "../action/types";

let isAuth = false;

localStorage.getItem("twitter-token") ? (isAuth = true) : (isAuth = false);

const initialState = {
  isAuthenticated: isAuth,
  token: localStorage.getItem("twitter-token"),
  username: null,
  email: null,
  id: null,
  isVerified: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      localStorage.setItem("twitter-token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.user.username,
        email: action.payload.user.email,
        token: localStorage.getItem("twitter-token"),
        id: action.payload.user.id,
        isVerified: action.payload.user.email_verified,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        email: action.payload.email,
        username: action.payload.username,
        id: action.payload.id,
        isVerified: action.payload.email_verified,
      };
    case USER_NOTLOADED:
      return {
        ...state,
        isAuthenticated: false,
        isVerified: false,
      };
    default:
      return state;
  }
};

export default auth;
