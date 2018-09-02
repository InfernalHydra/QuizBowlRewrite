import React, {Component} from 'react';
import {Icon} from 'react-materialize';
import Trigger from './Trigger';
import Menu from './Menu';
import {MenuLinks} from './const';

import './Navbar.css';
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.handleClickAdmin = this.handleClickAdmin.bind(this);
    }
    handleClickAdmin(e) {
        e.preventDefault();        
        if (e.button===0 && e.ctrlKey) {
            console.log("OPEN ADMIN PANEL");
        }
    }
    render () {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Trigger items = {<Menu links = {['Register']}/>} trigger={<div className='left-icon'><Icon>person</Icon></div>} />
                    <div onClick={this.handleClickAdmin} className="brand-logo center">QuizBowl</div>
                    <Trigger items = {<Menu links = {MenuLinks}/>} pos={'right'}trigger={<div className='right-icon'><Icon>menu</Icon></div>} />
                </div>
            </nav>
        )
    }
}

export default NavBar;