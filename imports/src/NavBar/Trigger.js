import React, {Component} from '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import {SideNav, SideNavItem} from 'react-materialize';
import PropTypes from '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/prop-types';

class Trigger extends  Component{
    render () {
        return (
            <SideNav trigger={this.props.trigger} options={{edge:this.props.pos, closeOnClick:true}}>
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