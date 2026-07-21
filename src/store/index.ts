import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducer/carrinho'

import api from '../service/api'
import { getDefaultFormatCodeSettings } from 'typescript'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>