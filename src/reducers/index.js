import { combineReducers } from 'redux';
import auth from './auth';
import errors from './errors';
import tweet from './tweet';
import nav from './nav';
import users from './users';
import comments from './comments';

const rootReducer = combineReducers({
  auth,
  errors,
  tweet,
  nav,
  users,
  comments,
});

export default rootReducer;
