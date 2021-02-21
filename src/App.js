import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { loadUser } from './action/auth';
import { loadTweets } from './action/tweet';
import { getComments } from './action/comments';
import Alerts from './components/layout/Alerts';
import Main from './Main';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadTweets());
    dispatch(getComments('all'));
  }, [dispatch]);
  const auth = useSelector((state) => state.auth);
  return (
    <Router>
      <div className='App'>
        {!auth.isAuthenticated ? (
          <Redirect to='/login' />
        ) : (
          <Redirect to='/home' />
        )}
        <Alerts />
        {!auth.isAuthenticated && <Redirect to='/login' />}
        <Switch>
          <Route path='/home' component={Main} />
          <Route exact path='/register' component={Signup} />
          <Route exact path='/login' component={Login} />
          {/* <Redirect from='/' to='/home' /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
