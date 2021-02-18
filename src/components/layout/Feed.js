import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tweet from './Tweet';
import { v4 } from 'uuid';
import { loadTweets } from '../../action/tweet';
import { NavLink } from 'react-router-dom';

const Feed = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTweets());
  }, [dispatch]);
  const tweets = useSelector((state) => state.tweet.tweets);
  return (
    <div className='Feed mt-4'>
      {tweets &&
        tweets.map((tweet) => {
          return (
            <NavLink key={v4()} to={`/home/tweet/${tweet.id}`} id='TweetNav'>
              <Tweet tweet={tweet} />
            </NavLink>
          );
        })}
    </div>
  );
};

export default Feed;
