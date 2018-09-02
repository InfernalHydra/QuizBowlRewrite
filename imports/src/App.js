import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import UserMainContainer from './User/UserMainContainer';
import {Switch, Route, Router} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';


class App extends Component {
  browserHistory = createBrowserHistory();
  render() {
    return (
      <div>
        <Router history = {this.browserHistory}>
          <div>
          <NavBar />
          <Switch>
            <Route exact link = '/' component = {UserMainContainer}/>
            <Route link = '/user' component = {UserMainContainer}/>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
