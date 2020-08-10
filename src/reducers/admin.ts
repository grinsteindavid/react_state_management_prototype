import { createSlice } from '@reduxjs/toolkit'

export interface IAlertModal {
    visible?: boolean,
    size?: string | null,
    color?: string | null,
    title?: string | null,
    body?: string | null,
    icon?: string | null,
    onConfirm?: Function | null
}

const initialState: IAlertModal = {
    visible: false,
    size: null,
    color: null,
    title: null,
    body: null,
    icon: null,
    onConfirm: null
}

const adminSlice = createSlice({
    name: 'admin',
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

export const { openAlertModal, closeAlertModal } = adminSlice.actions

export default adminSlice.reducer

