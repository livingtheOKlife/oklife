import { configureStore } from '@reduxjs/toolkit'

import authReducer from './api/authSlice'

import { apiSlice } from './api/apiSlice'

/**------------------------------ create store
 *
 * @name store
 * @requires configureStore @reduxjs/toolkit
 * @requires authReducer authSlice
 * @requires apiSlice
 * @description handles api reducers and middleware
 *
 * --------------- */

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export type AuthStateType = ReturnType<typeof store.getState>

export default store