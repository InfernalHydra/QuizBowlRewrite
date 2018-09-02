import React, {Component} from 'react';
import {Row, Col, Modal} from 'react-materialize';
import PropTypes from 'prop-types';
class UserModal extends Component {
    render() {
        return (
            <Modal trigger={this.props.trigger}>
                <Row>
                    <Col s={4}>Pic</Col>
                    <Col s={8}>
                        <Row>
                            <Col s={6}>Name</Col>
                            <Col s={6}>Join</Col>
                        </Row>
                        <Row>
                            <Col s={6}>Stats</Col>
                            <Col s={6}>Badges</Col>
                        </Row>
                    </Col>
                </Row>
            </Modal>
        )
    }
}
UserModal.propTypes = {
    trigger: PropTypes.node.isRequired,
}
export default UserModal;