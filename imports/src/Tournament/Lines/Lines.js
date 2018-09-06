import React, { Component } from 'react';

class Lines extends Component {
    render() {
        let topColor = 'black';
        let bottomColor = 'black';
        if (this.props.win === 'top') {
            topColor='red';
        }
        else if (this.props.win === 'bottom'){
            bottomColor='red';
        }
        return (
            <div className='bracket-lines' style={{top: this.props.top, height:25*(this.props.init+1)+'%'} }> 
                <div className='bracket-top-left' style={{borderColor:topColor}}></div>
                <div className='bracket-top-right' style={{borderColor:topColor}}></div>
                <div className='bracket-bottom-left' style={{borderColor:bottomColor}}></div>
                <div className='bracket-bottom-right' style={{borderColor:bottomColor}}></div>
            </div>    
        )        
    }
}

export default Lines;