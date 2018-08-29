import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from './redux/store';
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
ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
