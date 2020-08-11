import React from 'react';
import Router from './router';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import { openAlertModal, closeAlertModal, IAlertModal } from '../../reducers/alert_modal';
import { IAuthModal, closeAuthModal } from '../../reducers/auth_modal';
import { AdminMenu, AdminAlertModal, AdminAuthModal } from './components';

interface IProps {
    alertModal: IAlertModal,
    authModal: IAuthModal,
    closeAuthModal: () => void,
    closeAlertModal: () => void,
}

function AdminPage(props: IProps) {
    const { alertModal, authModal, closeAuthModal, closeAlertModal } = props;

    function confirmAlertHandler() {
        closeAlertModal();
        alertModal.onConfirm?.();
    }

    return (
        <>
            <AdminMenu />

            {alertModal.visible && (
                <AdminAlertModal
                    size={alertModal.size}
                    color={alertModal.color}
                    title={alertModal.title}
                    body={alertModal.body}
                    icon={alertModal.icon}
                    onConfirm={confirmAlertHandler}
                />
            )}

            {authModal.visible && (
                <AdminAuthModal
                    onClose={closeAuthModal}
                />
            )}

            <div className={styles.wrapper}>
                <Router />
            </div>
        </>
    );
};


const mapStateToProps = (state: { alertModal: IAlertModal, authModal: IAuthModal }) => ({
    alertModal: state.alertModal,
    authModal: state.authModal
});
const mapDispatchToProps = { openAlertModal, closeAlertModal, closeAuthModal };

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
