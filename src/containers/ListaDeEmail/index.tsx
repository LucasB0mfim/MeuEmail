import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import FiltroCard from '../../components/FiltroCard'
import Email from '../Email'
import * as S from './styles'

const ListaDeEmail = () => {
  const { emails } = useSelector((state: RootReducer) => state)

  return (
    <S.Container>
      <S.Main>
        <S.Categoria>
          <FiltroCard legenda="Principal" ativo />
          <FiltroCard legenda="Promoções" />
          <FiltroCard legenda="Social" />
        </S.Categoria>
        <S.Ul>
          {emails.map((email) => (
            //usei a key para não repetir o titulo
            <li key={email.titulo}>
              <Email titulo={email.titulo} descricao={email.descricao} />
            </li>
          ))}
        </S.Ul>
      </S.Main>
    </S.Container>
  )
}

export default ListaDeEmail
