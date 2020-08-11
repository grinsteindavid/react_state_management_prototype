import React, { useState } from 'react'
import { Form, Input, Button, Modal, Header } from 'semantic-ui-react'
import AuthService from '../../../services/auth'
import styles from './auth_modal.module.scss'

interface IProps {
    onClose: () => void
}

export default function AuthModal(props: IProps) {
    const { onClose } = props
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    async function login() {
        setIsLoading(true)

        try {
            const user = await AuthService.login(username, password);
            onClose()
        } catch (error) {
            console.error(error);
            alert(error.message);
        }

        setIsLoading(false)
    }

    return (
        <Modal
            closeOnDimmerClick={false}
            closeOnEscape={false}
            closeOnDocumentClick={false}
            closeOnPortalMouseLeave={false}
            dimmer="inverted"
            size='tiny'
            open={true}
        >
            <Header
                icon='user'
                color='black'
                content='Your session has expired.'
            />
            <Modal.Content>
                <Form widths='equal'>

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
                        color='green'
                        fluid={true}
                        disabled={isLoading}
                        loading={isLoading}
                        content='Login'
                        onClick={login}
                    />
                </Form>
            </Modal.Content>
        </Modal>
    )
}