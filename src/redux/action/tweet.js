import axios from "axios";
import {
  ADD_ERROR,
  TWEET_ADD,
  TWEET_DELETE,
  TWEET_LOAD,
  GET_OWN_TWEET,
} from "./types";
import { url } from "../../components/data/url";

//Add Tweet
export const addTweet = (tweet) => (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  };
  axios
    .post(`${url}/tweet/`, tweet, config)
    .then((res) => {
      dispatch({
        type: ADD_ERROR,
        payload: { tweetAdded: "Tweet successfully added" },
      });
      dispatch({ type: TWEET_ADD, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_ERROR, payload: err.response.data });
    });
};

//Load Tweets
export const loadTweets = () => async (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  };
  try {
    const res = await axios.get(`${url}/tweet`, config);
    dispatch({ type: TWEET_LOAD, payload: res.data });
  } catch {}
};

//Delete Tweet
export const deleteTweet = (id) => (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
  };
  axios
    .delete(`${url}/tweet/${id}/`, config)
    .then(() => {
      dispatch({
        type: ADD_ERROR,
        payload: { deletedTweet: "Tweet has been deleted" },
      });
      dispatch({ type: TWEET_DELETE, payload: id });
    })
    .catch((err) => {
      dispatch({ type: ADD_ERROR, payload: err.response.data });
    });
};

export const getOwnTweets = () => (dispatch, getState) => {
  const owner = getState().auth.id;
  const tweets = getState().tweet.tweets.filter(
    (tweet) => tweet.owner === owner
  );
  dispatch({ type: GET_OWN_TWEET, payload: tweets });
};
