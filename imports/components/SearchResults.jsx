import React, {Component} from 'react';
import {Session} from 'meteor/session';
import {withTracker} from 'meteor/react-meteor-data';
import {Teams} from '../api/Teams.js';

class SearchResults extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return( !this.props.isReady ? <div>loading</div> :
            this.props.teams.map((team, index) => {
                return <div key = {index}>{team.name}</div>;
            }));
    }
}

export default withTracker(() => {
    const subscription = Meteor.subscribe('teams');
    var search = Session.get('Search.query');

    var query = {};
    query.name = {$regex : '(' + search + '\\S+|' + search + ')'};

    return {
      'isReady' : subscription.ready(),
      'teams' : subscription.ready() && Teams.find(query).fetch(),
    };
  })(SearchResults);
  