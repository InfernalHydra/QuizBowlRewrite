import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';
import TopRank from './TopRank';
import SearchUser from './SearchUser';
import './User.css';

class UserMainContainer extends Component {
    render() {
        return (
            <Row className='container user-container'>
                <TopRank />
                <SearchUser />
            </Row>
        )
    }
}

export default UserMainContainer;