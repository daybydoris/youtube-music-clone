import React from 'react';
import { Route } from 'react-router-dom';

const ContextRoute = ({ path, exact, Provider, Component }) => {
    return (
        <Route path={path} exact={exact}>
            <Provider>
                <Component />
            </Provider>
        </Route>
    );
}

export default ContextRoute;