import React, {Component} from 'react';
import {SideNavItem, Icon} from 'react-materialize';

const links = ['Users', 'Teams', 'Matches']
class Menu extends Component {
    constructor (props) {
        super(props);        
        this.state = {focus:''};
    }
    handleMenuClick = (name, e) => {
        this.setState({focus:name});            
    }
    render() {
        let linkNodes = links.map((val,index)=> {
            let id;
            if (this.state.focus === val) {
                id = 'focus'
            }
            return <SideNavItem id={id} key={index.toString()+id} onClick={() => this.handleMenuClick(val)}>{val}</SideNavItem>
        })
        return (
            <div>
                <div className='menu-title'>Menu</div>
                <SideNavItem divider></SideNavItem>
                {linkNodes}
            </div>
        )
        
    }
}

export default Menu;