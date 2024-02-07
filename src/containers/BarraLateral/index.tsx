import Filtro from '../../components/Filtros'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Botao type="submit">C</S.Botao>
      <S.Filtros>
        <Filtro />
        <Filtro />
        <Filtro />
        <Filtro />
        <Filtro ativo="true" />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
