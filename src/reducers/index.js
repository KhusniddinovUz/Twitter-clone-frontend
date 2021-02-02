import { combineReducers } from 'redux';
import auth from './auth';
import errors from './errors';
import tweet from './tweet';
import nav from './nav';
import users from './users';

const rootReducer = combineReducers({ auth, errors, tweet, nav, users });

export default rootReducer;
