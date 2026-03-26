import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { paraReal } from '../Produto'
import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { Produto } from '../../App'

const Header = () => {
  const itensCarrinho = useSelector((state: RootState) => state.carrinho.itens)

  // 3. Adicionado o tipo ': number' no acumulador (acc) para resolver o erro TS7006
  const valorTotal = itensCarrinho.reduce((acc: number, item: Produto) => {
    acc += item.preco
    return acc
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
