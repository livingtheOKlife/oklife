import { apiSlice } from './apiSlice'

/**------------------------------ auth api slice
 *
 * @name authApiSlice
 * @requires apiSlice
 * @description authentication mutation builder
 * @method POST /api/auth/create-account
 *
 * --------------- */

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAccount: builder.mutation({
      query: (data) => ({
        url: '/api/auth/create-account',
        method: 'POST',
        body: data,
      }),
    })
  })
})

export const {
  useCreateAccountMutation
} = authApiSlice