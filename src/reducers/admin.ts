import { createSlice } from '@reduxjs/toolkit'
import AuthService from '../services/auth'

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        authModal: {
            visible: false
        }
    },
    reducers: {
        openAuthModal(state) {
            AuthService.removeToken()
            state.authModal.visible = true
        },
        closeAuthModal(state) {
            state.authModal.visible = false
        }
    }
})

export const { openAuthModal, closeAuthModal } = adminSlice.actions

export default adminSlice.reducer

