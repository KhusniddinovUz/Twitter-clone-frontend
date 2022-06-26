import React from 'react';
import TweetHome from '../layout/TweetHome';
import Feed from '../layout/Feed';
import { useSelector } from 'react-redux';
import roller from '../layout/roller.svg';

const Home = () => {
  const tweets = useSelector((state) => state.tweet.tweets);
  let loader = '';
  const loaderStyle = {
    margin: 'auto',
    display: 'block',
  };

  tweets.length > 0 ? (loader = '') : (loader = roller);

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
