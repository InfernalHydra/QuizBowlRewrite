import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import UserMainContainer from './User/UserMainContainer';
import {Session} from 'meteor/session';
import {withTracker} from 'meteor/react-meteor-data';
class App extends Component {
  render() {
    let node;    
    switch (this.props.view) {
      case 'Users': 
      node = <UserMainContainer />
      break;
      case 'Teams':
      node = <div>Constructing</div>
      break;
      case 'Matches':
      node = <div>M Constructing</div>
      break;
    }
    return (
      <div>
        <NavBar />
        {node}
      </div>
    );
  }
}

export default withTracker(()=>{
  const view = Session.get('View').view;
  //console.log(view);
  return {
    view: view
  }
})(App);
