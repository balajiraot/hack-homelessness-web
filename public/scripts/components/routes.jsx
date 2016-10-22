import React from 'react';
import {Route, IndexRoute} from 'react-router';
import RootComponent from './RootComponent';
import Hello from './Hello';
import Login from '../login/components/CreateLogin'
import CreateBasicInformation from '../common/components/CreateBasicInformation'

const routes = (
    <Route path="/hack-homelessness-web" component={RootComponent}>
        <IndexRoute component={Hello}/>
        <Route path="login" component={Login}/>
        <Route path="info" component={CreateBasicInformation}/>
    </Route>
);

export default routes;