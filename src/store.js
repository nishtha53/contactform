import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/users/contactSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
})