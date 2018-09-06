import React, {Component} from 'react';
import {Row, Col, Icon} from 'react-materialize';
import Input from 'react-materialize/lib/Input';
import {Session} from  'meteor/session';

class SearchBar extends Component {
    constructor(props)
    {
        super(props);
        Session.set('search', '');
        this.state = {
            search : ''
        }
    }
    handleChange(e) {
        Session.set('search', {query: e.target.value});
        console.log(e.target.value);
    }
    render () {
        return (
            <Row>
                <Input s={7} label='User Search' onChange={this.handleChange}><Icon>search</Icon></Input>
            </Row>
        )
    }
}

export default SearchBar;