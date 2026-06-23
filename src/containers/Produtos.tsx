import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { adicionar } from '../store/carrinho'
import { useGetProdutosQuery } from '../store/service/api'

const ProdutosComponent = () => {
  const dispatch = useDispatch()
  const { data: produtos, isLoading } = useGetProdutosQuery()

  const itensNoCarrinho = useSelector(
    (state: RootState) => state.carrinho.itens
  )

  if (isLoading) return <div>Carregando...</div>

  return (
    <section>
      {produtos?.map((produto) => (
        <div key={produto.id}>
          <img src={produto.imagem} alt={produto.nome} />
          <h3>{produto.nome}</h3>
          <button onClick={() => dispatch(adicionar(produto))}>
            {itensNoCarrinho.find((p) => p.id === produto.id)
              ? 'Já está no carrinho'
              : 'Adicionar ao carrinho'}
          </button>
        </div>
      ))}
    </section>
  )
}

export default ProdutosComponent
