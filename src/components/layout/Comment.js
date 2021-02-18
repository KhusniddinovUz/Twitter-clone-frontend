import React from 'react';
import moment from 'moment';

const Comment = ({ comment }) => {
  return (
    <div className='Tweet  p-3 d-flex'>
      <img
        src={`https://ui-avatars.com/api/?name=${comment.username}&background=random`}
        className='profile-image'
        alt='profile'
      />
      <div className='container'>
        <span className='username'>{comment.username}</span>
        <div>{comment.body}</div>
      </div>
      <div id='time'>{moment(comment.created).format('MMM Do YYYY')}</div>
    </div>
  );
};

export default Comment;
