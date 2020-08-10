import { combineReducers } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import adminSlice from './reducers/admin'

const rootReducer = combineReducers({
    adminSlice,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()]
})

export default store