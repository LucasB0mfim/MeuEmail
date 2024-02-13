import FiltroCategorias from '../../components/FiltroCategorias'
import * as S from './styles'

const Categorias = () => (
  <S.Container>
    <FiltroCategorias ativo />
    <FiltroCategorias ativo={false} />
    <FiltroCategorias ativo={false} />
  </S.Container>
)

export default Categorias
