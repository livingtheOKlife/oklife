import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')!)
    : null
}

/**------------------------------ create auth slice
 *
 * @name authSlice
 * @requires createSlice @reduxjs/toolkit
 * @requires initialState
 * @description contains authentication mutations
 *
 * --------------- */

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**------------------------------ set credentials reducer
     *
     * @name setCredentials
     * @requires localStorage
     * @description set local storage credentials
     *
     * --------------- */
    setCredentials: (state, action) => {
      state.userInfo = action.payload
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    /**------------------------------ set credentials reducer
     *
     * @name setCredentials
     * @requires localStorage
     * @description remove local storage credentials
     *
     * --------------- */
    clearCredentials: (state, action) => {
      state.userInfo = null
      localStorage.removeItem('userInfo')
    }
  }
})

export const { setCredentials, clearCredentials } = authSlice.actions

export default authSlice.reducer