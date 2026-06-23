import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from './service/api'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const itemExiste = state.itens.find((p) => p.id === action.payload.id)

      if (!itemExiste) {
        state.itens.push(action.payload)
      } else {
        alert('Item já adicionado ao carrinho')
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((p) => p.id !== action.payload)
    }
  }
})

export const { adicionar, remover } = carrinhoSlice.actions
export default carrinhoSlice.reducer
