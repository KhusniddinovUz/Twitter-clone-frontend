import React from 'react';
import { useSelector } from 'react-redux';
import Tweet from '../layout/Tweet';
import { v4 } from 'uuid';
import { NavLink } from 'react-router-dom';

const OwnerTweets = () => {
  const tweets = useSelector((state) => state.tweet.owntweets);
  return (
    <div className='OwnerTweets'>
      {tweets &&
        tweets.map((tweet) => {
          return (
            <NavLink key={v4()} to={`/home/tweet/${tweet.id}`} id='TweetNav'>
              <Tweet className='Tweet' tweet={tweet} key={v4()} />
            </NavLink>
          );
        })}
    </div>
  );
};

export default OwnerTweets;
