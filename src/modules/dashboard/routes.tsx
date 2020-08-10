import React from 'react'
import { Route, Switch } from "react-router-dom"
import DashboardPage from "./page"

function RouteWrapper() {

    return (
        <Switch>
            <Route
                exact
                path="/admin"
                render={(props) => <DashboardPage />}
            />
        </Switch>
    );
}

export default RouteWrapper
