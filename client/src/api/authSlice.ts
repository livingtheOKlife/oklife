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
  reducers: {}
})

export default authSlice.reducer