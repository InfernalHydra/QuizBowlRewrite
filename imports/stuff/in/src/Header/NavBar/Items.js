import React, {Component} from 'react';

export default class Items extends Component {
    render () {        
        return (
            <div onClick={this.props.onClick}>{this.props.item}</div>
        )
    }
}