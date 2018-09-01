import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from '../imports/src/App';
import {Meteor} from 'meteor/meteor';

class Routing extends React.Component {
    render() {
        return (
            <App />
        )
    }
}
Meteor.startup(() => {
    ReactDOM.render(<Routing />, document.getElementById('root'));
})
