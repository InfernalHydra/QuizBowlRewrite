import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Label extends Component {
    render() {
        return (
            <div className='bracket-label' 
                style={{top: this.props.top}}>
                {this.props.children}
            </div>
        )
        
    }
}
Label.defaultProps = {
    name : 'NULL TEAM',
    top: '0%',
}

Label.propTypes = {
    name: PropTypes.string,
    top: PropTypes.string
}
export default Label;