import React from 'react';
import { Button, Modal, Header, Icon } from 'semantic-ui-react';
import { IAlertModal } from 'reducers/alert_modal';

export default function AlertModal(props: IAlertModal) {
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