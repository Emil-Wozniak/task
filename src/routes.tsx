import React from 'react';
import {Switch} from 'react-router-dom';
import ErrorBoundaryRoute from "./components/error/error-boundary-route";
import Home from "./modules/home/home";

const Routes = () => (
    <Switch>
        <ErrorBoundaryRoute path="/" component={Home}/>
    </Switch>
);

export default Routes;