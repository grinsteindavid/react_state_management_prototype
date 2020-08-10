import React, { useEffect, useState } from 'react';
import UserService from '../../services/user';
import { IUser } from '../../services/user'
import { Table, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { openAlertModal, IAlertModal } from '../../reducers/admin';

interface IProps {
    openAlertModal: (config: IAlertModal) => void
}

function UserPage(props: IProps) {
    const { openAlertModal } = props
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function fetchUsers() {
        setIsLoading(true);

        try {
            const response = await UserService.fetchUsers();
            setUsers(response);
        } catch (error) {
            console.error(error)
            openAlertModal({ body: 'Error fetching data', color: 'red', title: 'Alert' });
        }

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

const mapDispatchToProps = { openAlertModal };
export default connect(undefined, mapDispatchToProps)(UserPage);
