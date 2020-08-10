import React from 'react'
import PermissionsRoutes from '../permissions/routes'
import UsersRoutes from '../users/routes'
import DashboardRoutes from '../dashboard/routes'

function Router() {

    return (
        <>
            <PermissionsRoutes />
            <UsersRoutes />
            <DashboardRoutes />
        </>
    )
}

export default Router