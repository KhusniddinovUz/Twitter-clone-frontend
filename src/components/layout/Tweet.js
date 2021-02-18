import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { getComments } from '../../action/comments';

const Tweet = ({ tweet, fetch }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    if (fetch) {
      dispatch(getComments(tweet.id));
    }
  };
  return (
    <div className='Tweet p-3 d-flex' onClick={clickHandler}>
      <img
        src={`https://ui-avatars.com/api/?name=${tweet.username}&background=random`}
        className='profile-image'
        alt='profile'
      />
      <div className='container'>
        <span className='username'>{tweet.username}</span>
        <div>{tweet.text}</div>
      </div>
      <div id='time'>{moment(tweet.created_at).format('MMM Do YYYY')}</div>
    </div>
  );
};

export default Tweet;
