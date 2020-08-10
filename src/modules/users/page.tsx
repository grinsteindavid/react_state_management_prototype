import React, { useEffect, useState } from 'react';
import UserService from '../../services/user';
import { IUser } from '../../services/user'
import { Table, Loader } from 'semantic-ui-react';

function UserPage() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function fetchUsers() {
        setIsLoading(true);

        const response = await UserService.fetchUsers();
        setUsers(response);

        setIsLoading(false);
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Birthday</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                {isLoading === false && (
                    <Table.Body>
                        {users.map(user => {

                            return (
                                <Table.Row key={user.id}>
                                    <Table.Cell>{user.id}</Table.Cell>
                                    <Table.Cell>{user.fullName}</Table.Cell>
                                    <Table.Cell>{user.email}</Table.Cell>
                                    <Table.Cell>{user.birthday}</Table.Cell>
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

export default UserPage
