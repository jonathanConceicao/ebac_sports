import { useGetProdutosQuery } from '../service/api'
import ProdutoComponente from '../components/Produto'
import { Produto } from '../App'
import * as S from './styles'

const Produtos = () => {
  const { data: produtos, isLoading, isError } = useGetProdutosQuery()

  if (isLoading) {
    return <h2>Carregando produtos...</h2>
  }

  if (isError) {
    return <h2>Não foi possível carregar os produtos.</h2>
  }

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <ProdutoComponente key={produto.id} produto={produto} />
      ))}
    </S.Produtos>
  )
}

export default Produtos
