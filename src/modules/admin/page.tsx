import React from 'react';
import Router from './router';
import { Menu, Button } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import AuthService from '../../services/auth';
import styles from './styles.module.scss';

function AdminPage() {

    return (
        <>
            <AdminMenu />

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

export default AdminPage;
