import React, {Component} from '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import {SideNavItem, Icon} from 'react-materialize';
import {NavLink} from '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-dom';

class Menu extends Component {
    
    constructor (props) {
        super(props);        
        this.state = {focus:'users'};
        //console.log(this.props.links);
    }


    handleMenuClick = (name, e) => {
        this.setState({focus:name});            
    }
    
    render() {
        //console.log(this.props.links);
        let linkNodes = this.props.links.map((val,index)=> {
            let id;
            if (this.state.focus === val) {
                id = 'focus'
            }
            return <NavLink id={id} key={index.toString()+id} to = '/'>
                        <SideNavItem onClick={() => this.handleMenuClick(val)}>{val}</SideNavItem>
                    </NavLink>;
        })


        return (
            <div>
                <div className='menu-title'>Menu</div>
                <SideNavItem divider></SideNavItem>
                    {linkNodes}
                <SideNavItem divider></SideNavItem>
                <div>Made by Daniel Hahn</div>
                <div>and Ryan Chhong</div>
            </div>
        )
        
    }
}

export default Menu;