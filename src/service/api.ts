import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Produto } from '../App'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/ebac_sports',
  }),

  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'produto',
    }),
  }),
})

export const { useGetProdutosQuery } = api

export default api
