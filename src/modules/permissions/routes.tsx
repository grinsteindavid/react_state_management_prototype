import React from 'react'
import { Route, Switch } from "react-router-dom"
import PermissionsPage from "./page"

function RouteWrapper() {

    return (
        <Switch>
            <Route
                exact
                path="/profile"
                render={(props) => <PermissionsPage />}
            />
        </Switch>
    );
}

export default RouteWrapper
