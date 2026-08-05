import { useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import { adicionar } from '../../store/reducer/carrinho'
import * as S from './styles'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor)
}

const Produto = ({ produto }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Card>
      <S.Capa src={produto.imagem} alt={produto.nome} />
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Tag>{produto.categoria}</S.Tag>
      <S.Preco>R$ {produto.preco.toFixed(2)}</S.Preco>
      <S.BtnComprar type="button" onClick={() => dispatch(adicionar(produto))}>
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Card>
  )
}

export default Produto
