import React, { Component } from 'react';
import './Tournament.css';
import LabelContainer from './LabelContainer';
import LineContainer from './LineContainer';
const defaultTourney = {
    teams: ['team1','team2','team3','team4']
}
class Bracket extends Component {
    render() {
        
        let size = defaultTourney.teams.size;     
        size = 5;   
        let str1 = "";
        for (let i = 0; i < size; i++) {
            str1 += (100/size) + "% ";
        }
        //init should be (height + height / 4) * where
        return (
            <div className='container tourney-grid' style={{gridTemplateColumns:str1}}>
                <LabelContainer items={defaultTourney.teams} init={0}/>
                <LineContainer win={['top', 'bottom']} init={0}/>
                <LabelContainer items={defaultTourney.teams} init={1}/>
                <LineContainer init={1} />
                <LabelContainer items={defaultTourney.teams} init={3}/>
            </div>
        )
    }
}
export default Bracket;