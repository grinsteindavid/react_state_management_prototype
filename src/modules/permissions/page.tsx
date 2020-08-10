import React, { useEffect, useState } from 'react';
import PermissionService from '../../services/permission';
import { IPermission } from '../../services/permission'
import { Table, Loader } from 'semantic-ui-react';

function PermissionsPage() {
    const [permissions, setPermissions] = useState<IPermission[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function fetchPermissions() {
        setIsLoading(true);

        const response = await PermissionService.fetchPermissions();
        setPermissions(response);

        setIsLoading(false);
    }

    useEffect(() => {
        fetchPermissions();
    }, [])

    return (
        <>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Created At</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                {isLoading === false && (
                    <Table.Body>
                        {permissions.map(permission => {

                            return (
                                <Table.Row key={permission.id}>
                                    <Table.Cell>{permission.id}</Table.Cell>
                                    <Table.Cell>{permission.fullName}</Table.Cell>
                                    <Table.Cell>{permission.city}</Table.Cell>
                                    <Table.Cell>{permission.createdAt}</Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                )}
            </Table>

            {isLoading && <Loader size="huge" active />}
        </>
    );
}

export default PermissionsPage
