import React from 'react';
import { Link } from "react-router-dom";
import {
    Divider,
    Grid,
    Header,
    Icon,
    Segment,
} from 'semantic-ui-react';
import styles from './styles.module.scss';

function DashboardPage() {

    return (
        <>
            <Segment placeholder>
                <Grid columns={2} stackable textAlign='center'>
                    <Divider vertical>Or</Divider>

                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            <Link to="admin/permissions">
                                <Header icon className={styles.elementHover}>
                                    <Icon name='file' />
                                    Permissions
                                </Header>
                            </Link>

                        </Grid.Column>

                        <Grid.Column>
                            <Link to="admin/users">
                                <Header icon className={styles.elementHover}>
                                    <Icon name='user' />
                                    Users
                                </Header>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </>
    );
}

export default DashboardPage
