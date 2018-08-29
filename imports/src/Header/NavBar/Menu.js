import React, {Component} from 'react';

//import anime from 'anime'

export default class Menu extends Component {
    render () {        
        return (
            <div className={'menuButton' + this.props.menu} onClick={this.props.onClick}/>
        )
    }
}