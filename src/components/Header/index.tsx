import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { paraReal } from '../Produto'
import * as S from './styles'
import cesta from '../assets/cesta.png'

import { Produto as ProdutoType } from '../../store/service/api'

const Header = () => {
  const itensCarrinho = useSelector((state: RootState) => state.carrinho.itens)

  const valorTotal = itensCarrinho.reduce((acc, item: ProdutoType) => {
    return acc + item.preco
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <img src={cesta} alt="Carrinho" />
        <span>
          {itensCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
