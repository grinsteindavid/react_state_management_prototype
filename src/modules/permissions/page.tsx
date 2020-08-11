import React, { useEffect, useState, useContext } from 'react';
import PermissionService from '../../services/permission';
import { Table, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { openAlertModal, IAlertModal } from '../../reducers/alert_modal';
import { PermissionsContext } from './context';

interface IProps {
    openAlertModal: (config: IAlertModal) => void
}

function PermissionsPage(props: IProps) {
    const { openAlertModal } = props;
    const { state, setState } = useContext(PermissionsContext);
    const { permissions } = state;
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function fetchPermissions() {
        setIsLoading(true);

        try {
            const response = await PermissionService.fetchPermissions();
            setState(prevState => ({
                ...prevState,
                permissions: response
            }));
        } catch (error) {
            console.error(error);
            openAlertModal({ body: 'Error fetching data', color: 'red', title: 'Alert' });
        }

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

const mapDispatchToProps = { openAlertModal };
export default connect(undefined, mapDispatchToProps)(PermissionsPage);
