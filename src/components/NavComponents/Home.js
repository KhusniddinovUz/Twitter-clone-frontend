import React from 'react';
import TweetHome from '../layout/TweetHome';
import Feed from '../layout/Feed';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTweets } from '../../action/tweet';
import { getComments } from '../../action/comments';
import roller from '../layout/roller.svg';

const Home = () => {
  const tweets = useSelector((state) => state.tweet.tweets);
  const dispatch = useDispatch();
  let loader = '';
  const loaderStyle = {
    margin: 'auto',
    display: 'block',
  };

  tweets.length > 0 ? (loader = '') : (loader = roller);
  console.log(loader);

  useEffect(() => {
    dispatch(loadTweets());
    dispatch(getComments('all'));
  }, [dispatch]);
  return (
    <div className='Home'>
      <TweetHome />
      <div>
        {!(loader === '') && (
          <img src={loader} alt='loader' style={loaderStyle} />
        )}
        <Feed />
      </div>
    </div>
  );
};

export default Home;
