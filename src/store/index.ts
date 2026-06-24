import { configureStore } from '@reduxjs/toolkit'
import { api } from './service/api'
import carrinhoReducer from '../carrinho'
import favoritosReducer from '../favoritos1'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
