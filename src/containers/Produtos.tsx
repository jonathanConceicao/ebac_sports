import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import * as S from './styles'

type Props = {
  itens: ProdutoType[]
}

const ProdutosComponent = ({ itens }: Props) => (
  <S.Produtos>
    {itens.map((p) => (
      <Produto key={p.id} produto={p} estaNosFavoritos={false} />
    ))}
  </S.Produtos>
)

export default ProdutosComponent
