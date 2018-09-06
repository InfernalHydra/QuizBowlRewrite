import React, { Component } from 'react';
import Lines from './Lines/Lines';

class LineContainer extends Component {
    render () {        
        let size = 2;
        let lines = []
        console.log(this.props);
        for (let i = 0; i < size; i++) {
            lines.push(<Lines init={this.props.init} key={i} top={5 + i * 50 + this.props.init * (10 * 5 /4 ) + '%'}></Lines>)
        }
        
        return (
            <div>
                <div style={{width: '100%', height: '100%', position: 'relative'}}>
                    {lines} 
                </div>     
            </div>
        )
    }
}
export default LineContainer;