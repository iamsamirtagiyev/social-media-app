import { configureStore } from '@reduxjs/toolkit'
import auth from './auth'
import modal from './modal'
import theme from './theme'

export const store = configureStore({
  reducer: { 
    auth,
    modal,
    theme
  },
})