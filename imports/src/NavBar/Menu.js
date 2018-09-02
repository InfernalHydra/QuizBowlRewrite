import React, {Component} from 'react';
import {SideNavItem, Icon} from 'react-materialize';
import {Session} from 'meteor/session';

class Menu extends Component {
    
    constructor (props) {
        super(props);        
        this.state = {focus:Session.get('View').view};
    }

    links = ['Users', 'Teams', 'Matches']

    handleMenuClick = (name, e) => {
        Session.set('View', {view: name});
        this.setState({focus:name});            
    }
    render() {
        let linkNodes = this.links.map((val,index)=> {
            let id;
            if (this.state.focus === val) {
                id = 'focus'
            }
            return (
                <SideNavItem id={id} 
                    key={index.toString()+id} 
                    onClick={() => this.handleMenuClick(val)}>
                    {val}
                </SideNavItem>
            )
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