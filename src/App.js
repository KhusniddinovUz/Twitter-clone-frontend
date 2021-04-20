import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { Switch, Route, Redirect } from "react-router-dom";
import { loadUser } from "./redux/action/auth";
import { loadTweets } from "./redux/action/tweet";
import { getComments } from "./redux/action/comments";
import Alerts from "./components/layout/Alerts";
import Main from "./Main";

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(loadUser());
    if (auth.id) {
      dispatch(loadTweets());
      dispatch(getComments("all"));
    }
  }, [dispatch, auth.id]);
  return (
    <div>
      <div className="App">
        <Alerts />
        {!auth.isAuthenticated && <Redirect to="/login" />}
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Signup} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
