import { apiSlice } from './apiSlice'

/**------------------------------ auth api slice
 *
 * @name authApiSlice
 * @requires apiSlice
 * @description authentication mutation builder
 * @method POST /api/auth/create-account
 * @method POST /api/auth/sign-out
 * @method POST /api/auth/sign-in
 * @method POST /api/auth/verify-account
 * @method POST /api/auth/resend-verification-email
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
    }),
    signIn: builder.mutation({
      query: (data) => ({
        url: '/api/auth/sign-in',
        method: 'POST',
        body: data
      })
    }),
    signOut: builder.mutation({
      query: () => ({
        url: '/api/auth/sign-out',
        method: 'POST'
      })
    }),
    verifyAccount: builder.mutation({
      query: (data) => ({
        url: `/api/auth/verify-account`,
        method: 'POST',
        body: data,
      }),
    }),
    resendVerification: builder.mutation({
      query: (data) => ({
        url: '/api/auth/resend-verification-email',
        method: 'POST',
        body: data
      })
    })
  })
})

export const {
  useCreateAccountMutation,
  useSignInMutation,
  useSignOutMutation,
  useVerifyAccountMutation,
  useResendVerificationMutation
} = authApiSlice