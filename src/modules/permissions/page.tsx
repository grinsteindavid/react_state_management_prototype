import React, { useEffect, useState, useContext, useMemo } from 'react';
import PermissionService from '../../services/permission';
import { Table, Loader, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { openAlertModal, IAlertModal } from '../../reducers/alert_modal';
import { PermissionsContext } from './context';
import { IPermission } from '../../services/permission';

interface IProps {
    openAlertModal: (config: IAlertModal) => void
}

function PermissionsPage(props: IProps) {
    const { openAlertModal } = props;
    const { state, setState } = useContext(PermissionsContext);
    const { permissions } = state;
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);

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
            <TestStateRender
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            />

            <PermissionsTable
                permissions={permissions}
                isLoading={isLoading}
            />

            {isLoading && <Loader size="huge" active />}
        </>
    );
}

interface ITestStateRenderProps {
    isChecked: boolean,
    setIsChecked: (value: boolean) => void
}

function TestStateRender(props: ITestStateRenderProps) {
    const { isChecked, setIsChecked } = props

    return useMemo(() => {
        return (
            <div style={{ padding: 40 }}>
                <Checkbox
                    toggle
                    label="test state render"
                    checked={isChecked}
                    onChange={(event, { checked }) => setIsChecked(checked as boolean)}
                />
            </div>
        )
    }, [isChecked])
}

interface IPermissionsTableProps {
    permissions: IPermission[],
    isLoading: boolean
}

function PermissionsTable(props: IPermissionsTableProps) {
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

const mapDispatchToProps = { openAlertModal };
export default connect(undefined, mapDispatchToProps)(PermissionsPage);
