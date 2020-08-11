import { combineReducers } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import alertModal from './reducers/alert_modal'
import authModal from './reducers/auth_modal'

const rootReducer = combineReducers({
    alertModal,
    authModal
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()]
})

export default store