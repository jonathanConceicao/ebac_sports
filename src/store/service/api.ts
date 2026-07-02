import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api' // URL da API do projeto ebac_sports
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetProdutosQuery } = api
