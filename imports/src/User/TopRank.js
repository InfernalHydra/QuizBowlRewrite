import React, {Component} from 'react';
import {Row, Col} from 'react-materialize';
import UserModal from './UserModal';
import UserBigPanel from './InfoComponent/UserBigPanel';
class TopRank extends Component {
    render () {
        return (
            <Col className='top-rank' s={12} m={12} l={6}>
                <Row className='top-rank-row' s={4} m={4} l={4}>
                    <Col s={12} m ={12} l={12} xl={12}>
                        <UserModal trigger={<div><UserBigPanel /></div>}/>
                    </Col>                                      
                </Row>
                <Row className='top-rank-row' s={4} m={4} l={4}>
                    <Col s={12} m ={12} l={12} xl={12}>
                        <UserModal trigger={<div><UserBigPanel /></div>}/>
                    </Col>                                      
                </Row>
                <Row className='top-rank-row' s={4} m={4} l={4}>
                    <Col s={12} m ={12} l={12} xl={12}>
                        <UserModal trigger={<div><UserBigPanel /></div>}/>
                    </Col>                                      
                </Row>
            </Col>
        )
    }
}

export default TopRank;