import React from 'react'
import Router from './router'
import { Menu, Button } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import AuthService from '../../services/auth';

function AdminPage() {

    return (
        <>
            <AdminMenu />

            <Router />
        </>
    );
};

function AdminMenu() {
    let history = useHistory()

    function logOutHandler() {
        AuthService.logout()
        history.push('/')
    };

    return (
        <Menu>
            <Menu.Item>
                <Button
                    icon="log out"
                    color="blue"
                    content="Log-out"
                    onClick={logOutHandler}
                />
            </Menu.Item>
        </Menu>
    )
};

export default AdminPage;
