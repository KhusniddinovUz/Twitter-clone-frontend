import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTweet } from '../../action/tweet';

const TweetMore = ({ tweet, owner }) => {
  const dispatch = useDispatch();
  const tweet_owner = useSelector((state) => state.auth.id);
  const onClick = (e) => {
    e.preventDefault();
  };

  const deleteHandler = () => {
    dispatch(deleteTweet(tweet.id));
  };

  const copyLinkHandler = () => {
    const link = `https://twitter-clone-n1.netlify.app/home/tweet/${tweet.id}`;
    navigator.clipboard.writeText(link);
  };
  return (
    <div onClick={onClick} className='TweetMore'>
      <div className='dropleft'>
        <i
          className='btn btn-secondary far fa-ellipsis-v'
          type='button'
          id='dropdownMenuButton'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        ></i>
        <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
          <span className='dropdown-item' onClick={copyLinkHandler}>
            Copy Link
          </span>
          {tweet_owner === owner && (
            <span onClick={deleteHandler} className='dropdown-item'>
              Delete
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TweetMore;
