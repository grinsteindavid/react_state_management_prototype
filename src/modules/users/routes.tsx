import React from 'react';
import { Route, Switch } from "react-router-dom"
import UsersPage from "./page";
import { Provider } from './context';

function RouteWrapper() {

    return (
        <Switch>
            <Route
                exact
                path="/admin/users"
                render={(props) => {
                    return (
                        <Provider initialState={{ users: [] }}>
                            <UsersPage />
                        </Provider>
                    )
                }}
            />
        </Switch>
    );
}

export default RouteWrapper;
