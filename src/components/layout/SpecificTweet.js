import React from 'react';
import { withRouter } from 'react-router-dom';

const SpecificTweet = (props) => {
  const tweet_id = props.location.pathname.substring(
    12,
    props.location.pathname.length
  );
  return <div>Hello You're in the {tweet_id} tweet</div>;
};

export default withRouter(SpecificTweet);
