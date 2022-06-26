import {
  TWEET_ADD,
  TWEET_LOAD,
  TWEET_DELETE,
  GET_OWN_TWEET,
} from "../action/types";
const initialState = {
  tweets: [],
  owntweets: [],
};

const tweet = (state = initialState, action) => {
  switch (action.type) {
    case TWEET_ADD:
      const newTweets = [...state.tweets];
      newTweets.unshift(action.payload);
      return {
        ...state,
        tweets: newTweets,
      };
    case TWEET_LOAD:
      return {
        ...state,
        tweets: action.payload,
      };
    case TWEET_DELETE:
      return {
        ...state,
        tweets: state.tweets.filter((tweet) => tweet.id !== action.payload),
      };
    case GET_OWN_TWEET:
      return {
        ...state,
        owntweets: action.payload,
      };
    default:
      return state;
  }
};

export default tweet;
