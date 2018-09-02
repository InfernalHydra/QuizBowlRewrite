import React, {Component} from 'react';
import UserPicture from './UserPicture';
import {Card} from 'react-materialize';
import PropTypes from 'prop-types';

class UserBigPanel extends Component {
    render()
    {
        return(
            <Card horizontal style={{width:this.props.size}} header={
                <div style={{width: '100px'}}>
                    <div className='user-name-title'>{this.props.name}</div>
                    <UserPicture pic={this.props.pic}/>
                    <div className='user-rank'>{this.props.rank}</div>
                </div>}>
                Some Stuff
            </Card>     
        );
    }
}

UserBigPanel.defaultProps = {
    pic: './Screenshot_20180901-023637_Kik.jpg',
    name: 'Name',
    rank: 0,
    size: '100%',
    height: '30%'
}

UserBigPanel.propTypes = {
    pic: PropTypes.string,
    name: PropTypes.string,
    rank: PropTypes.number,
    size: PropTypes.string,
}

export default UserBigPanel;