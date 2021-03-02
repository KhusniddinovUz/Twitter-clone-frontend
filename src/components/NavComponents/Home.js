import React from 'react';
import TweetHome from '../layout/TweetHome';
import Feed from '../layout/Feed';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTweets } from '../../action/tweet';
import { getComments } from '../../action/comments';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTweets());
    dispatch(getComments('all'));
  }, [dispatch]);
  return (
    <div className='Home'>
      <TweetHome />
      <Feed />
    </div>
  );
};

export default Home;
