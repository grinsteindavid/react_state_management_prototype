import { createSlice } from '@reduxjs/toolkit'

export interface IAuthModal {
    visible: boolean,
}

const initialState: IAuthModal = {
    visible: false,
}

const authModalSlice = createSlice({
    name: 'auth_modal',
    initialState,
    reducers: {
        openAuthModal(state) {
            return {
                ...state,
                visible: true
            }
        },
        closeAuthModal(state) {
            return {
                ...state,
                visible: false
            }
        }
    }
})

export const { openAuthModal, closeAuthModal } = authModalSlice.actions

export default authModalSlice.reducer

