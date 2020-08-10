import React from 'react'
import { Route, Switch } from "react-router-dom"
import UsersPage from "./page"

function RouteWrapper() {

    return (
        <Switch>
            <Route
                exact
                path="/admin/users"
                render={(props) => <UsersPage />}
            />
        </Switch>
    );
}

export default RouteWrapper
