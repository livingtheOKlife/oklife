import { apiSlice } from './apiSlice'

/**------------------------------ auth api slice
 *
 * @name authApiSlice
 * @requires apiSlice
 * @description authentication mutation builder
 *
 * --------------- */

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({})
})