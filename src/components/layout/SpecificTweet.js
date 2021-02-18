import React from 'react';
import { withRouter } from 'react-router-dom';
import Tweet from './Tweet';
import { useSelector } from 'react-redux';
import Comments from './Comments';

const SpecificTweet = (props) => {
  const tweet_id = props.location.pathname.substring(
    12,
    props.location.pathname.length
  );
  const comments = useSelector((state) =>
    state.comments.filter((com) => `${com.tweet}` === tweet_id)
  );
  const tweet = useSelector((state) => {
    if (state.tweet.tweets.length > 0) {
      let tweets = state.tweet.tweets.filter(
        (tweet) => `${tweet.id}` === tweet_id
      );
      return tweets.shift();
    }
  });
  return (
    <div>
      {tweet && <Tweet tweet={tweet} />}
      {comments.length <= 0 ? (
        <div className='text-center p-2'>No comments yet</div>
      ) : (
        <div className='text-center p-2'>Comments on your tweet</div>
      )}
      <Comments comments={comments} />
    </div>
  );
};

export default withRouter(SpecificTweet);
