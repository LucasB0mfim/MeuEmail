import FiltroCard from '../../components/FiltroCard'
import Tarefa from '../Tarefa'
import * as S from './styles'

const ListaDeEmail = () => (
  <S.Container>
    <S.Main>
      <S.Categoria>
        <FiltroCard legenda="Principal" ativo />
        <FiltroCard legenda="Promoções" />
        <FiltroCard legenda="Social" />
      </S.Categoria>
      <S.Ul>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
      </S.Ul>
    </S.Main>
  </S.Container>
)

export default ListaDeEmail
