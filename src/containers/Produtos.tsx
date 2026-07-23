import Produto from '../components/Produto'
import { useGetJogosQuery } from '../service/api'

import * as S from './styles'

const Produtos = () => {
  const { data: produtos, isLoading, isError } = useGetJogosQuery()

  if (isLoading) {
    return <h2>Carregando...</h2>
  }

  if (isError) {
    return <h2>Não foi possível carregar os produtos.</h2>
  }

  return (
    <S.Produtos>
      {produtos?.map((item) => (
        <Produto key={item.id} item={item} />
      ))}
    </S.Produtos>
  )
}

export default Produtos
