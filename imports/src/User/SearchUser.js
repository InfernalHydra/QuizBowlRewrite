import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';
import SearchBar from './SearchBar.js';
import UserSearchBox from './UserSearchBox';
class SearchUser extends Component {
    render () {
        return (
            <Col className='search-user' s={12} m={12} l={6}>
                <SearchBar/>
                <UserSearchBox />
            </Col>
        )
    }
}

export default SearchUser;