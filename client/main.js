import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from '../imports/src/App';
import {Meteor} from 'meteor/meteor';
import {Session} from 'meteor/session';
class Routing extends React.Component {
    componentDidMount() {
        console.log("HI");
        
    }
    render() {
        return (
            <App />
        )
    }
}
Meteor.startup(() => {
    Session.setDefault('Search', {query: ''});
    Session.setDefault('topRankSize', 100);
    ReactDOM.render(<Routing />, document.getElementById('root'));
})
