import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

import './modules/config'


import './stylesheets/main.scss'

import Router from './router'


ReactDOM.render(
    <Provider store = {store}>
        <Router />  
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
