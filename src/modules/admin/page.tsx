import React, { useEffect } from 'react';
import Router from './router';
import { Menu, Button, Modal, Header, Icon } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import AuthService from '../../services/auth';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import { openAlertModal, closeAlertModal, IAlertModal } from '../../reducers/admin';

interface IProps {
    alertModal: IAlertModal,
    closeAlertModal: () => void,
    openAlertModal: (config: IAlertModal) => void
}

function AdminPage(props: IProps) {
    const { alertModal } = props

    function confirmAlertHandler() {
        props.closeAlertModal()
        alertModal.onConfirm?.()
    }

    useEffect(() => {
        props.openAlertModal({ body: 'Welcome!' })
    }, [])

    return (
        <>
            <AdminMenu />

            {alertModal.visible && (
                <AlertModal
                    size={alertModal.size}
                    color={alertModal.color}
                    title={alertModal.title}
                    body={alertModal.body}
                    icon={alertModal.icon}
                    onConfirm={confirmAlertHandler}
                />
            )}

            <div className={styles.wrapper}>
                <Router />
            </div>
        </>
    );
};

function AdminMenu() {
    let history = useHistory();

    function logOutHandler() {
        AuthService.logout();
        history.push('/');
    };

    return (
        <Menu inverted borderless style={{ borderRadius: 0 }}>
            <Menu.Item>
                <Button
                    icon="home"
                    color="green"
                    content="Home"
                    onClick={(e) => history.push('/')}
                />
            </Menu.Item>
            <Menu.Item>
                <Button
                    icon="log out"
                    color="green"
                    content="Log-out"
                    onClick={logOutHandler}
                />
            </Menu.Item>
        </Menu>
    )
};

function AlertModal(props: any) {
    const { size, color, title, body, icon, onConfirm } = props

    return (
        <Modal
            dimmer="inverted"
            size={size || 'tiny'}
            open={true}
        >
            <Header
                icon={icon || 'warning sign'}
                color={color || 'blue'}
                content={title || ''}
            />
            <Modal.Content>
                {body || ''}
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' inverted onClick={onConfirm}>
                    <Icon name='checkmark' /> Ok
                </Button>
            </Modal.Actions>
        </Modal>
    )
};

const mapStateToProps = (state: { adminSlice: IAlertModal }) => ({
    alertModal: state.adminSlice
})
const mapDispatchToProps = { openAlertModal, closeAlertModal };

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
