import React, {Component} from 'react';
import {Row, Col, Icon} from 'react-materialize';
import Input from 'react-materialize/lib/Input';
import {Session} from  'meteor/session';

class SearchBar extends Component {
    handleChange(e) {
        Session.set('Search', {query: e.target.value});
    }
    render () {
        return (
            <Row>
                <Input s={7} label='User Search' onChange={this.handleChange}><Icon>search</Icon></Input>
                <Col s={1}>1</Col>
            </Row>
        )
    }
}

export default SearchBar;