import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';
import UserModal from './UserModal';
import UserSmallPanel from './InfoComponent/UserSmallPanel';
class TopRank extends Component {
    render () {
        return (
            <Col className='top-rank' s={12} m={12} l={6}>
                <Row className='top-rank-row'>
                    <Col s={12} m ={4} l={4} xl={4}>
                        <UserModal trigger={<div><UserSmallPanel /></div>}/>
                    </Col>                    
                    <Col s={12} m ={4} l={4} xl={4}>
                        <UserModal trigger={<div><UserSmallPanel /></div>}/>
                    </Col>  
                    <Col s={12} m ={4} l={4} xl={4}>
                        <UserModal trigger={<div><UserSmallPanel /></div>}/>
                    </Col>     
                </Row>
            </Col>
        )
    }
}

export default TopRank;