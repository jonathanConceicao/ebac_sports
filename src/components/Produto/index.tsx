import { useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { adicionar } from '../../store/reducer/carrinho'
import { Produtos } from '../../containers/styles'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const Produto = ({ produto }: Props) => {
  const dispatch = useDispatch()
  return (
    <S.Produto>
      <S.Capa>
        <S.Tag>{produto.categoria}</S.Tag>
        <img src={Produtos.imagem} alt={Produtos.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Plataformas>
        {produto.plataformas.map((plat) => (
          <li key={plat}>{plat}</li>
        ))}
      </S.Plataformas>
      <S.Prices>
        {produto.precoAntigo && <small>{paraReal(produto.precoAntigo)}</small>}
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
