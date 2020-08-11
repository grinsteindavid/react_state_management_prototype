import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Provider } from './context';
import PermissionsPage from "./page";

function RouteWrapper() {

    return (
        <Switch>
            <Route
                exact
                path="/admin/permissions"
                render={(props) => {
                    return (
                        <Provider initialState={{ permissions: [] }}>
                            <PermissionsPage />
                        </Provider>
                    )
                }}
            />
        </Switch>
    );
}

export default RouteWrapper
