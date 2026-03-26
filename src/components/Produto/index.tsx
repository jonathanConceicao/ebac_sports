import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import { adicionar } from '../../carrinho'
import { favoritar } from '../../favoritos1'
import * as S from './styles'
type Props = {
  produto: ProdutoType
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch()

  const aoComprar = () => dispatch(adicionar(produto))
  const aoFavoritar = () => dispatch(favoritar(produto))

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Preco>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Preco>
      <S.BtnCurtir onClick={aoFavoritar} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnCurtir>
      <S.BtnComprar onClick={aoComprar} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default memo(ProdutoComponent)
