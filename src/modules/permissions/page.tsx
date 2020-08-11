import React, { useEffect, useState, useContext } from 'react';
import PermissionService from '../../services/permission';
import { Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { openAlertModal, IAlertModal } from '../../reducers/alert_modal';
import { PermissionsContext } from './context';
import { TestStateRender, PermissionsTable } from './components'

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

const mapDispatchToProps = { openAlertModal };
export default connect(undefined, mapDispatchToProps)(PermissionsPage);
