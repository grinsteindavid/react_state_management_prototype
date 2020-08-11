import { createSlice } from '@reduxjs/toolkit'
import { SemanticCOLORS, SemanticICONS } from 'semantic-ui-react';

type TModalSizes = 'mini' | 'tiny' | 'small' | 'large' | 'fullscreen'

export interface IAlertModal {
    visible?: boolean,
    size?: TModalSizes | null,
    color?: SemanticCOLORS | null,
    title?: string | null,
    body?: string | null,
    icon?: SemanticICONS | null,
    onConfirm?: () => void | undefined
}

const initialState: IAlertModal = {
    visible: false,
    size: null,
    color: null,
    title: null,
    body: null,
    icon: null,
    onConfirm: undefined
}

const alertModalSlice = createSlice({
    name: 'alert_modal',
    initialState,
    reducers: {
        openAlertModal(state, action) {
            return {
                ...state,
                ...action.payload,
                visible: true
            }
        },
        closeAlertModal(state) {
            return {
                ...state,
                visible: false
            }
        }
    }
})

export const { openAlertModal, closeAlertModal } = alertModalSlice.actions

export default alertModalSlice.reducer

