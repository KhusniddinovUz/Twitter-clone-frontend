import React, { useEffect, useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Tweet from './Tweet';
import { useSelector } from 'react-redux';
import Comments from './Comments';
import AddCommentModal from './AddCommentModal';

const SpecificTweet = (props) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const tweet_id = props.match.params.id;
  const comments = useSelector((state) => {
    if (state.comments.length > 0) {
      return state.comments.filter((com) => `${com.tweet}` === tweet_id);
    } else return [];
  });

  const tweets = useSelector((state) => state.tweet.tweets);
  const tweet = tweets.filter((item) => item.id === Number(tweet_id))[0];

  if (tweets.length > 0 && !tweet) {
    return <Redirect to='/notfound' />;
  }
  return (
    <div className='SpecificTweet'>
      {tweet && <Tweet tweet={tweet} />}
      {comments.length <= 0 ? (
        <div className='text-center p-2'>No comments yet</div>
      ) : (
        <div className='text-center p-2'>Comments on your tweet</div>
      )}
      <button
        className='btn butn mx-auto d-block mt-2 mb-3'
        onClick={() => setOpen(true)}
      >
        Add comment
      </button>
      <div className='border-bottom'></div>
      <Comments comments={comments} />
      {tweet && <AddCommentModal open={open} close={close} tweet={tweet.id} />}
    </div>
  );
};

export default withRouter(SpecificTweet);
