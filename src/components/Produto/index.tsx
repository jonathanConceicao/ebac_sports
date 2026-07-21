import { useDispatch } from 'react-redux'
import { Sports} from '../../App'
import * as S from './styles'

import { adicionar } from '../../store/reducer/carrinho'
import { Produtos } from '../../containers/styles'

type Props = {
  item: Sports
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const Produto = ({item}: Props) => {
  const dispatch = useDispatch()
  return (
    <S.Produto>
      <S.Capa>
        <S.Tag>{item.categoria}</S.Tag>
        <img src={item.imagem} alt={item.nome} />
      </S.Capa>
      <S.Titulo>{item.nome}</S.Titulo>
      <S.Plataformas>
        {item.plataformas.map((plat) => (
          <li key={plat}>{plat}</li>
        ))}
        </S.Plataformas>
      <S.Prices>
        {item.precoAntigo && <small>{paraReal(item.precoAntigo)}</small>}       
        <strong>{paraReal(item.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => dispatch(adicionar(item))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto