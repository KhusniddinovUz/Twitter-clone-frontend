import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getComments } from '../../action/comments';

const Tweet = ({ tweet }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(getComments(tweet.id));
  };
  return (
    <NavLink
      id='TweetNav'
      to={`/home/tweet/${tweet.id}`}
      onClick={clickHandler}
    >
      <div className='Tweet  p-3 d-flex'>
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
    </NavLink>
  );
};

export default Tweet;
