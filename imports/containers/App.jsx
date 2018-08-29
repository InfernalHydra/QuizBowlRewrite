import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {Teams} from '../api/Teams.js';

class App extends Component
{
  render()
  {
    var render = this.props.isReady && this.props.teams.map((team, index) => {
      return <div key = {index}>{team.name}</div>;
    });
    return render;
  }
}

export default withTracker(() => {
  const subscription = Meteor.subscribe('teams');
  return {
    'isReady' : subscription.ready(),
    'teams' : subscription.ready() && Teams.find({}).fetch(),
  };
})(App);
