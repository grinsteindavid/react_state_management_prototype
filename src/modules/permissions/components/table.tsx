import React, { useMemo } from 'react';
import { Table } from 'semantic-ui-react';
import { IPermission } from '../../../services/permission';

interface IProps {
    permissions: IPermission[],
    isLoading: boolean
}

export default function PermissionsTable(props: IProps) {
    const { permissions, isLoading } = props
    return useMemo(() => {
        return (
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
        )
    }, [permissions, isLoading])
}