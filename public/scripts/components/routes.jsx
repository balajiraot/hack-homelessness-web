import React from 'react';
import {Route, IndexRoute} from 'react-router';
import RootComponent from './RootComponent';
import Hello from './Hello';
import Login from '../login/components/CreateLogin'
import CreateBasicInformation from '../common/components/CreateBasicInformation'
import CreateCoCInformation from '../coc/components/CreateCoCInformation'
import CreateUnempInformation from '../unemployment/components/CreateUnempInformation'
import CreateOrganizationForm from '../organization/components/CreateOrganizationForm'


const routes = (
    <Route path="/hack-homelessness-web" component={RootComponent}>
        <IndexRoute component={Hello}/>
        <Route path="login" component={Login}/>
        <Route path="info" component={CreateBasicInformation}/>
        <Route path="coc" component={CreateCoCInformation}/>
        <Route path="unemployment" component={CreateUnempInformation}/>
            <Route path="organization" component={CreateOrganizationForm}/>
    </Route>
);

export default routes;