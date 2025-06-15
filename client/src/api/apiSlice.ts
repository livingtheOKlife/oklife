import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ baseUrl: import.meta.env.CLIENT_URL })

/**------------------------------ create api slice
 *
 * @name apiSlice
 * @requires baseQuery
 * @description handles api connection
 *
 * --------------- */

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [''],
  endpoints: (builder) => ({}),
})
