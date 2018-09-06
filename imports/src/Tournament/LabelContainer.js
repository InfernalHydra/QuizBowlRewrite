import React, { Component } from 'react';
import Label from './Label/Label';
class LabelContainer extends Component {
    render() {
        let height = 10;
        let items = this.props.items.map ((val, index)=> {
            return <Label key={index} top={index * 25 * (1+this.props.init) + this.props.init * (height * 5 / 4) + '%'}>{val}</Label>
        }) 
        
        return (
            <div>
                <div style={{width: '100%', height: '100%', position: 'relative'}}>
                    {items} 
                </div>                
            </div>
        )        
    }
}

export default LabelContainer;