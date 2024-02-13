import * as S from './styles'
import caneta from '../../images/lapis.png'

const BarraLateral = () => (
  <S.BarraLateral>
    <S.BotaoEscrever type="submit">
      <img src={caneta} style={{ width: '20px' }} />
    </S.BotaoEscrever>
  </S.BarraLateral>
)

export default BarraLateral
