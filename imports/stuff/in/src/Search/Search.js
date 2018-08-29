import React, { Component } from 'react';
import actions from '../redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Search.css';
class Search extends Component {
    constructor (props) {
        super(props);
        this.state = {res:[]}
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {        
    }
    render () {
        let results = this.state.res.map((value, index)=>{
            return <div key = {index}>{value}</div>
        })
        return (
            <div className="search" style={{display:this.props.menu?'block':'none'}}>
                <input placeholder="Search" onChange={this.handleChange}/>
                {results}
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
export default connect(mapStateToProps, mapDispatchToProps)(Search);