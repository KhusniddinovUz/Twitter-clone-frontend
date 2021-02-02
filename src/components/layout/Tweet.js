import React from 'react';
import moment from 'moment';

const Tweet = ({ tweet }) => {
  return (
    <div className='Tweet container p-3 d-flex'>
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
