import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Form, Input, Message, Label } from 'semantic-ui-react';
import AuthService from '../../services/auth';
import styles from './login.module.scss';

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    let history = useHistory();

    async function login() {
        setIsLoading(true);

        try {
            const user = await AuthService.login(username, password);
            history.push(AuthService.getIntendeedRoute() || '/');
        } catch (error) {
            console.error(error);
            alert(error.message);
        }

        setIsLoading(false);
    };

    return (
        <>

            <div className={styles.app}>

                <header className={styles.header}>

                    <Form className={styles.form}>
                        <Label color="green" attached='top' >COMISARIA VIRTUAL</Label>

                        <Message
                            error
                            header='Wrong credentials'
                            content='Your username or password is incorrect.'
                        />

                        <Form.Field>
                            <label className={styles.label}>Username</label>
                            <Input
                                fluid={true}
                                icon='user outline'
                                iconPosition='left'
                                placeholder='Username'
                                name="username"
                                value={username}
                                onChange={(event, { value }) => setUsername(value)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label className={styles.label}>Password</label>
                            <Input
                                fluid={true}
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                name="password"
                                type='password'
                                value={password}
                                onChange={(event, { value }) => setPassword(value)}
                            />
                        </Form.Field>
                        <Button
                            className={styles.loginBtn}
                            color="grey"
                            content="Login"
                            fluid={true}
                            disabled={isLoading}
                            loading={isLoading}
                            onClick={(event) => login()}
                        />
                    </Form>
                </header>
            </div>
        </>
    )
};