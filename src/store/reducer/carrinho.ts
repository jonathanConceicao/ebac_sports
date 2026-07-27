import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type carrinhosState = {
  itens: Produto[]
}

const initialState: carrinhosState = {
  itens: [],
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produtos = action.payload

      if (state.itens.find((Produto) => Produto.id === produtos.id)) {
        alert('Item ja adicionado')
      } else {
        state.itens.push(produtos)
      }
    },
  },
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
