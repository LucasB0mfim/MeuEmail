import Filtro from '../../components/Filtros'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Botao type="submit">Escrever</S.Botao>
      <div>
        <Filtro />
        <Filtro />
        <Filtro />
        <Filtro />
        <Filtro ativo="true" />
      </div>
    </div>
  </S.Aside>
)

export default BarraLateral
