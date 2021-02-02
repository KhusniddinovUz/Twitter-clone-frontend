import axios from 'axios';
import {
  ADD_ERROR,
  TWEET_ADD,
  TWEET_DELETE,
  TWEET_LOAD,
  GET_OWN_TWEET,
} from './types';
import { url } from '../components/data/url';

//Add Tweet
export const addTweet = (tweet) => (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  axios
    .post(`${url}/tweet/`, tweet, config)
    .then((res) => {
      dispatch({
        type: ADD_ERROR,
        payload: { tweetAdded: 'Tweet successfully added' },
      });
      dispatch({ type: TWEET_ADD, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_ERROR, payload: err.response.data });
    });
};

//Load Tweets
export const loadTweets = () => (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  axios
    .get(`${url}/tweet`, config)
    .then((res) => {
      dispatch({ type: TWEET_LOAD, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_ERROR, payload: err.response.data });
    });
};

//Delete Tweet
export const deleteTweet = (id) => (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  axios
    .delete(`${url}/tweet/${id}/`, config)
    .then(() => {
      dispatch({
        type: ADD_ERROR,
        payload: { deletedTweet: 'Tweet has been deleted' },
      });
      dispatch({ type: TWEET_DELETE, payload: id });
    })
    .catch((err) => {
      dispatch({ type: ADD_ERROR, payload: err.response.data });
    });
};

export const getOwnTweets = () => (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  axios
    .get(`${url}/tweet/own/`, config)
    .then((res) => {
      dispatch({ type: GET_OWN_TWEET, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_ERROR, payload: err.response.data });
    });
};
