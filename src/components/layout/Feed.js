import React from 'react';
import { useSelector } from 'react-redux';
import Tweet from './Tweet';
import { v4 } from 'uuid';
import { NavLink } from 'react-router-dom';

const Feed = () => {
  const tweets = useSelector((state) => state.tweet.tweets);
  return (
    <div className='Feed mt-4'>
      {tweets &&
        tweets.map((tweet) => {
          return (
            <NavLink key={v4()} to={`/home/tweet/${tweet.id}`} id='TweetNav'>
              <Tweet tweet={tweet} fetch={true} />
            </NavLink>
          );
        })}
    </div>
  );
};

export default Feed;
