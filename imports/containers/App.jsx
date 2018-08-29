import React, {Component} from 'react';
import SearchBar from '../components/SearchBar.jsx';

export default class App extends Component
{
  render()
  {
    // var render = this.props.isReady && this.props.teams.map((team, index) => {
    //   return <div key = {index}>{team.name}</div>;
    // });
    return <SearchBar />;
  }
}
