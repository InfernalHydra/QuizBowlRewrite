import React, {Component} from 'react';
import {Session} from 'meteor/session';

import SearchResults from './SearchResults.jsx';

export default class SearchBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            query : "",
        };
        Session.set('Search.query', this.state.query);
    }
    
    handleChange(e)
    {
        var query = e.target.value;
        console.log(query);
        Session.set('Search.query', this.state.query);
        this.setState({query});
        //console.log("" + e.target.value);
    }

    render()
    {
        return(
            <div id = 'wrapper'>
                <input onChange = {this.handleChange.bind(this)} type="text" placeholder = "Search" name="search-bar"/>
                <SearchResults />
            </div>
        );
    }
}