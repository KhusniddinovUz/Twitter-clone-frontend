import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/NavComponents/Home";
import Profile from "./components/NavComponents/Profile";
import Empty from "./components/NavComponents/Empty";
import Trends from "./components/layout/Trends";
import SpecificTweet from "./components/layout/SpecificTweet";
import NotFound from "./components/layout/NotFound";

const Main = (props) => {
  return (
    <div className="Main">
      <Navbar />
      {props.history.location.pathname === "/" && <Redirect to="/home" />}
      <div className="centr">
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/notifications" component={Empty} />
          <Route exact path="/messages" component={Empty} />
          <Route exact path="/more" component={Empty} />
          <Route path="/home/tweet/:id" component={SpecificTweet} />
          <Route exact path="/notfound" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Trends />
    </div>
  );
};

export default withRouter(Main);
