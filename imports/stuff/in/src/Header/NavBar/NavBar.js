import React, {Component} from 'react';
import './NavBar.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Items from './Items.js';
import Menu from './Menu.js';
import actions from '../../redux/actions';
class NavBar extends Component {
    render () {        
        console.log(this.props);
        let items = ['teams', 'players', 'matches'];
        let short = items.map((item, index) => {
            return (<Items onClick={this.props.actions.changeCount} key={index} item={item}/>)
        })
        return (
            <div className="NavBar">
                <Menu menu={this.props.menu} onClick={this.props.actions.menuToggle}/>
                {short}
                {this.props.count}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);