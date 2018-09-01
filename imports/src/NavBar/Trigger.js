import React, {Component} from 'react';
import {SideNav, SideNavItem} from 'react-materialize';
import PropTypes from 'prop-types';

class Trigger extends  Component{
    render () {
        return (
            <SideNav trigger={this.props.trigger} options={{edge:this.props.pos}}>
                {this.props.items}
            </SideNav>
        )
    }
    
}
Trigger.defaultProps = {
    pos: 'left',
    items: <div/>,
}
Trigger.propTypes = {
    trigger: PropTypes.node.isRequired,
    pos: PropTypes.string,
    items: PropTypes.node,
}
export default Trigger;