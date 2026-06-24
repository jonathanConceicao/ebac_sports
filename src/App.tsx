import React from 'react'
import ProdutoComponente from './components/Produto'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { favoritar } from './favoritos1'
import { adicionar } from './carrinho'
import { Produto, useGetProdutosQuery } from './store/service/api'
import { Produtos } from './containers/styles'

function App() {
  const { data: produtos, isLoading, error } = useGetProdutosQuery()

  const favoritos = useAppSelector((state) => state.favoritos.itens)
  const dispatch = useAppDispatch()

  const lidarComFavorito = (produto: Produto) => {
    dispatch(favoritar(produto))
  }

  const lidarComCarrinho = (produto: Produto) => {
    dispatch(adicionar(produto))
  }

  if (isLoading) return <p>Carregando produtos...</p>
  if (error) return <p>Erro ao carregar produtos.</p>

  return (
    <div className="app-container">
      <main>
        <Produtos>
          {produtos?.map((item) => (
            <ProdutoComponente
              key={item.id}
              produto={item}
              estaNosFavoritos={favoritos.some((f) => f.id === item.id)}
              aoFavoritar={lidarComFavorito}
              aoComprar={lidarComCarrinho}
            />
          ))}
        </Produtos>
      </main>
    </div>
  )
}

export default App
