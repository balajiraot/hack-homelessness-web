import es6Promise from 'es6-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from "react-redux";
import configureStore from "./stores/main";
import {syncHistoryWithStore, routerMiddleware} from "react-router-redux";
import routes from './components/routes'


es6Promise.polyfill()

const middleware = routerMiddleware(browserHistory);
const store = configureStore(middleware);
const history = syncHistoryWithStore(browserHistory, store);


const routerElement = (
  <Provider store={store}>
    <Router routes={routes} history={history}/>
  </Provider>
);
ReactDOM.render(routerElement, document.querySelector('.contents'));
