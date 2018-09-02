import React, {Component} from 'react';
import Img from 'react-image';
import PropTypes from 'prop-types';
class UserPicture extends Component {
    render() {
        return (
            <Img className='user-image' src={this.props.pic}/>
        )
    }
}
UserPicture.propTypes = {
    pic: PropTypes.string.isRequired,
}

export default UserPicture;
