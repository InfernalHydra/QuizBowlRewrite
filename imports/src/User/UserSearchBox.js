import React, {Component} from 'react';
import {Session} from 'meteor/session';
import {withTracker} from 'meteor/react-meteor-data';
import UserSmallPanel from './InfoComponent/UserSmallPanel';
class UserSearchBox extends Component {    
    render() {
        //Make a query to DB for search 
        let query = ['name', 'name', 'name','name','daniel'];
        let nodes = query.map((val, index)=>{
            return <UserSmallPanel key={val+index.toString()} size='20%' name={val}/>
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
    const search = Session.get('Search').query;
    //console.log(search);
    return {
        search:search
    }
})(UserSearchBox);