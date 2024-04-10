import { configureStore } from '@reduxjs/toolkit'
import auth from './auth'
import modal from './modal'

export const store = configureStore({
  reducer: { 
    auth,
    modal,
  },
})