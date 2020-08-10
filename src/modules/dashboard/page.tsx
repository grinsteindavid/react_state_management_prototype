import React from 'react'
import { Link } from "react-router-dom";
import {
    Button,
    Divider,
    Grid,
    Header,
    Icon,
    Segment,
} from 'semantic-ui-react';

function DashboardPage() {

    return (
        <>
            <Segment placeholder>
                <Grid columns={2} stackable textAlign='center'>
                    <Divider vertical>Or</Divider>

                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            <Header icon>
                                <Icon name='file' />
                                    Permissions
                            </Header>

                            <Link to="admin/permissions">
                                <Button
                                    primary
                                    content="Search"
                                    icon="search"
                                />
                            </Link>

                        </Grid.Column>

                        <Grid.Column>
                            <Header icon>
                                <Icon name='user' />
                                Users
                            </Header>

                            <Link to="admin/users">
                                <Button
                                    primary
                                    content="Search"
                                    icon="search"
                                />
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </>
    );
}

export default DashboardPage
