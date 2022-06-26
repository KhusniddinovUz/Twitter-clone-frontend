import React from 'react';
import { v4 } from 'uuid';
import Comment from './Comment';

const Comments = ({ comments }) => {
  return (
    <div className='Comments'>
      {comments &&
        comments.map((comment) => <Comment key={v4()} comment={comment} />)}
    </div>
  );
};

export default Comments;
