import axios from "axios";
import { GET_COMMENT, ADD_ERROR, CREATE_COMMENT } from "./types";
import { url } from "../../components/data/url";

//Getting comments of a specific tweet
export const getComments = (id) => async (dispatch) => {
  const token = localStorage.getItem("twitter-token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  };
  try {
    const res = await axios.get(`${url}/tweet/comments/${id}`, config);
    dispatch({ type: GET_COMMENT, payload: res.data });
  } catch {}
};

// Add comment
export const addComment = (comment) => (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  };
  axios
    .post(`${url}/tweet/comment/`, comment, config)
    .then((res) => {
      dispatch({ type: CREATE_COMMENT, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_ERROR, payload: err.response.data });
    });
};
