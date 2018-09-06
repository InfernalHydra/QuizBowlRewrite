import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import UserMainContainer from './User/UserMainContainer';
import Bracket from './Tournament/Bracket';
import {Switch, Route, Router} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

function Construct (props) {
    return (<div>CONSTRUCTING</div>)
}
class App extends Component {
  browserHistory = createBrowserHistory();
  render() {
    return (
      <div>
        <Router history = {this.browserHistory}>
          <div>
          <NavBar />
          <Switch>            
            <Route path = '/users' component = {UserMainContainer}/>
            <Route path = '/teams' component = {Construct}/>
            <Route path = '/matches' component = {Bracket}/>
            <Route exact path = '/' component = {UserMainContainer}/>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
