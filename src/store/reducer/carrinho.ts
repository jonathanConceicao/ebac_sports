import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Sports } from '../../App'

type carrinhosState = {
  itens: Sports[]
}

const initialState: carrinhosState = {
  itens: [],
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Sports>) => {
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
