import React, {Component} from 'react';
import UserPicture from './UserPicture';
import {Card} from 'react-materialize';
import PropTypes from 'prop-types';
import {Session} from 'meteor/session';
import {withTracker} from 'meteor/react-meteor-data';
class UserBigPanel extends Component {
    
    render()
    {
        return(
            <div>
                <Card horizontal style={{width:this.props.size, height:this.props.height}} header={
                    <div style={{width: 'calc('+this.props.height+'px '+ '- 10%)'}}>
                        <div className='user-name-title'>{this.props.name}</div>
                        <UserPicture pic={this.props.pic}/>
                        <div className='user-rank'>{this.props.rank}</div>
                    </div>}>
                    Some Stuff
                </Card>     
            </div>
            
        );
    }
}

UserBigPanel.defaultProps = {
    pic: './Screenshot_20180901-023637_Kik.jpg',
    name: 'Name',
    rank: 0,
    size: '100%',
}

UserBigPanel.propTypes = {
    pic: PropTypes.string,
    name: PropTypes.string,
    rank: PropTypes.number,
    size: PropTypes.string,
    height: PropTypes.number
}

export default withTracker(()=>{
    const size = Session.get('topRankSize');
    return {
        height: size
    }
})(UserBigPanel);