import Filtro from '../../components/Filtros'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <Filtro />
      <Filtro />
      <Filtro />
      <Filtro />
      <Filtro ativo />
    </div>
  </S.Aside>
)

export default BarraLateral
