import React from 'react';
import { withRouter } from 'react-router-dom';
import Tweet from './Tweet';
import { useSelector } from 'react-redux';

const SpecificTweet = (props) => {
  const tweet_id = props.location.pathname.substring(
    12,
    props.location.pathname.length
  );
  const tweet = useSelector((state) => {
    if (state.tweet.tweets.length > 0) {
      let tweets = state.tweet.tweets.filter(
        (tweet) => `${tweet.id}` === tweet_id
      );
      return tweets.shift();
    }
  });
  console.log(tweet);
  return <div>{tweet && <Tweet tweet={tweet} />}</div>;
};

export default withRouter(SpecificTweet);
