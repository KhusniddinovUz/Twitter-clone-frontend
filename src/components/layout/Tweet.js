import moment from 'moment';
import TweetMore from './TweetMore';

const Tweet = ({ tweet }) => {
  return (
    <div className='Tweet p-3 d-flex'>
      <img
        src={`https://ui-avatars.com/api/?name=${tweet.username}&background=random`}
        className='profile-image'
        alt='profile'
      />
      <div className='container'>
        <span className='username'>{tweet.username}</span>
        <div className='user-text'>{tweet.text}</div>
      </div>
      <div className='additional'>
        <div id='time'>{moment(tweet.created_at).format('MMM D')}</div>
        <TweetMore tweet={tweet} owner={tweet.owner} />
      </div>
    </div>
  );
};

export default Tweet;
