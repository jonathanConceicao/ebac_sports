import { Sports } from '../App'
import  Produtos  from '../components/Produto'
import { useGetProdutosQuery } from '../service/api'

import * as S from './styles'


const Produtos = () => {

  const {data: produto, isLoading} = useGetProdutosQuery ()

if (isLoading) return <h2>Carregando...<h2/>
return (
  <>
      <S.Produtos>
        {produto?.map((item) => (
          <Produtos key={item.id} item={item} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos