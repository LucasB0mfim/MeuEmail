import * as S from './styles'
import pen from '../../images/lapis.png'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Botao type="submit">
        <img src={pen} alt="Escrever" style={{ width: '18px' }} />
      </S.Botao>
    </div>
  </S.Aside>
)

export default BarraLateral
