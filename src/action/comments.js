import axios from 'axios';
import { GET_COMMENT, ADD_ERROR } from './types';
import { url } from '../components/data/url';

//Getting comments of a specific tweet
export const getComments = (id) => (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  };
  axios
    .get(`${url}/tweet/comments/${id}`, config)
    .then((res) => {
      dispatch({ type: GET_COMMENT, payload: res.data });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: ADD_ERROR, payload: err.response.data });
    });
};
