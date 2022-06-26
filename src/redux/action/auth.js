import axios from "axios";
import { url } from "../../components/data/url";
import {
  ADD_ERROR,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  USER_LOADED,
  USER_NOTLOADED,
} from "./types";

//LoadUser
export const loadUser = () => async (dispatch) => {
  const token = localStorage.getItem("twitter-token");
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  try {
    const response = await axios.get(`${url}/api/user`, config);
    dispatch({ type: USER_LOADED, payload: response.data });
  } catch {
    dispatch({ type: USER_NOTLOADED });
  }
};

// Login
export const login = (user) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post(`${url}/api/login/`, user, config)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_ERROR, payload: err.response.data });
    });
};

//Register
export const register = (user) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post(`${url}/api/register/`, user, config)
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_ERROR, payload: err.response.data });
    });
};
