import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/NavComponents/Home';
import Profile from './components/NavComponents/Profile';
import Empty from './components/NavComponents/Empty';
import Trends from './components/layout/Trends';

const Main = (props) => {
  return (
    <div className='Main'>
      <Navbar props={props} />
      <div className='centr'>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/home/profile' component={Profile} />
          <Route exact path='/home/notifications' component={Empty} />
          <Route exact path='/home/messages' component={Empty} />
          <Route exact path='/home/more' component={Empty} />
        </Switch>
      </div>
      <Trends />
    </div>
  );
};

export default Main;
