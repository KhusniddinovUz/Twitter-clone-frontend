import React from 'react';
import { useSelector } from 'react-redux';
import Tweet from '../layout/Tweet';
import { v4 } from 'uuid';

const OwnerTweets = () => {
  const tweets = useSelector((state) => state.tweet.owntweets);
  return (
    <div className='OwnerTweets'>
      {tweets &&
        tweets.map((tweet) => (
          <Tweet className='Tweet' tweet={tweet} key={v4()} />
        ))}
    </div>
  );
};

export default OwnerTweets;
