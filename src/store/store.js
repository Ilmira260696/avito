import { configureStore } from '@reduxjs/toolkit'
import authReducers from './slices/AthorizationSlise'

export const store = configureStore({
  reducer: {
    auth: authReducers,
  },
})
