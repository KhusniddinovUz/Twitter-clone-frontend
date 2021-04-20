import {
  GET_LAST_USERS,
  ADD_ERROR,
  SEARCH_USERS,
  CLEAR_SEARCH_USERS,
} from "./types";
import axios from "axios";
import { url } from "../../components/data/url";

// Get last users
export const getLastUsers = () => (dispatch) => {
  const token = localStorage.getItem("twitter-token");
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  axios
    .get(`${url}/api/lastusers`, config)
    .then((res) => {
      dispatch({ type: GET_LAST_USERS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_ERROR, payload: err.response.data });
    });
};

//Search users
export const searchUsers = (name) => (dispatch) => {
  const token = localStorage.getItem("twitter-token");
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  axios
    .get(`${url}/api/users?search=${name}`, config)
    .then((res) => {
      dispatch({ type: SEARCH_USERS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_ERROR, payload: err.response.data });
    });
};

//Clear searched users store
export const clearSearchUser = () => {
  return {
    type: CLEAR_SEARCH_USERS,
  };
};
