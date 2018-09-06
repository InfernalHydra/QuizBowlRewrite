import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';
import {Session} from 'meteor/session';
import UserModal from './UserModal';
import UserSmallPanel from './InfoComponent/UserSmallPanel';
import UserBigPanel from './InfoComponent/UserBigPanel';
class TopRank extends Component {
    constructor (props) {
        super(props)                 
        this.myRef = React.createRef();
    }
    componentDidMount() {
        Session.set('topRankSize', this.myRef.current.children[0].offsetHeight/4)                               
    }
    render () {
        let width = window.innerWidth;
        let rank = [0,0,0] // placehoder for rank method
        let nodes;
        if (width > 600) {
            nodes = rank.map ((val, index)=>{
                return (
                    <Col key={index} s={12} m ={4} l={4} xl={4}>
                        <UserModal trigger={<div><UserSmallPanel /></div>}/>
                    </Col>
                )  
            })
        }
        else {
            nodes = rank.map ((val, index)=>{
                return (
                    <Col key={index} s={12} m ={4} l={4} xl={4}>
                        <UserModal trigger={<div><UserBigPanel/></div>}/>
                    </Col>
                )  
            })
        }
        return (
            <div ref={this.myRef}>
                <Col className='top-rank' s={12} m={12} l={6}>
                    <Row className='top-rank-row'>
                        {nodes}
                    </Row>
                </Col>
            </div>
            
        )
    }
}

export default TopRank;