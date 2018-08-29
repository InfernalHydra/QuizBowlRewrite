import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../imports/src/App';
import {Meteor} from 'meteor/meteor';
//import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from '../imports/src/redux/store';
import {Provider} from 'react-redux';

let initialState = {
    count:0,
    menu: false,
}
let store = configureStore(initialState);

class Routing extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
Meteor.startup(() => {
    ReactDOM.render(<Routing />, document.getElementById('root'));
})
