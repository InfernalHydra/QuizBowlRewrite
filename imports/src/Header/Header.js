import React, {Component} from 'react';
import Navbar from './NavBar/NavBar'
export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='logo'>logo</div>
                <Navbar />
            </div>
        )
    }
}