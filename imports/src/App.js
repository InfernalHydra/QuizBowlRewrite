import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import UserMainContainer from './User/UserMainContainer';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <UserMainContainer />
      </div>
    );
  }
}

export default App;
