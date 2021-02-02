import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OwnerTweets from './OwnerTweets';
import { getOwnTweets } from '../../action/tweet';

const Profile = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const ownTweets = useSelector((state) => state.tweet.owntweets.length);
  useEffect(() => {
    dispatch(getOwnTweets());
  }, []);
  return (
    <div className='Profile'>
      <div className='container p-4 text-center'>
        {auth.username} {ownTweets} {ownTweets === 1 ? 'tweet' : 'tweets'}
      </div>
      <OwnerTweets />
    </div>
  );
};

export default Profile;
