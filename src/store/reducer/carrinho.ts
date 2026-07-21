import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Sports } from '../../App'

type carrinhosState = {
  itens: Sports[]
}

const initialState: carrinhosState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Sports>) => {
      const jogo = action.payload

      if (state.itens.find((Produto) => Produto.id === jogo.id)) {
        alert('Item ja adicionado')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer