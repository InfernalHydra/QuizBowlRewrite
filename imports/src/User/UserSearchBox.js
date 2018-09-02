import React, {Component} from 'react';
import {Session} from 'meteor/session';
import {withTracker} from 'meteor/react-meteor-data';
import UserSmallPanel from './InfoComponent/UserSmallPanel';
import {Users} from '../../api/Users';

class UserSearchBox extends Component {    
    render() {
        //Make a query to DB for search 
        let query = ['name', 'name', 'name','name','daniel'];
        let nodes = this.props.isReady && this.props.users.map((val, index)=>{
            return <UserSmallPanel key={val+index.toString()} size='20%' name={val.name} rank = {val.rank}/>
        })
        return (
            <div className={'search-box'}>                
                {nodes}
            </div>
        )
    }
}
UserSearchBox.defaultProps ={
    search: ''
}
export default withTracker(()=>{
    const search = Session.get('search').query;
    const query = {};
    query.name = {$regex : '(' + search + '\\S+|' + search + ')'};
    const subsription = Meteor.subscribe('users');

    return {
        search,
        isReady : subsription.ready(),
        users: subsription.ready() && Users.find(query).fetch(),
    }
})(UserSearchBox);