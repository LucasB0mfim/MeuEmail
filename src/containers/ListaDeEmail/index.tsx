//ESSE ARQUIVO É TODO O MAIN DO PROJETO

import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Secao from '../../components/Secao'
import Email from '../../components/Email'
import * as S from './styles'
import * as emuns from '../../utils/enums/Email'

const ListaDeEmail = () => {
  const { itens } = useSelector((state: RootReducer) => state.emails)

  return (
    <S.Container>
      <S.Main>
        {/**/}
        {/**/}
        <S.Categoria>
          <Secao
            valor={emuns.Secao.PRINCIPAL}
            criterio="Principal"
            secao="Principal"
            ativo
          />
          <Secao
            valor={emuns.Secao.PROMOCAO}
            criterio="Promoção"
            secao="Promoção"
          />
          <Secao valor={emuns.Secao.SOCIAL} criterio="Social" secao="Social" />
        </S.Categoria>
        {/**/}
        {/**/}
        {/* modelo do email  */}
        <S.Ul>
          {itens.map((email) => (
            <li key={email.titulo}>
              <Email
                titulo={email.titulo}
                descricao={email.descricao}
                id={email.id}
                secao={email.secao}
              />
            </li>
          ))}
        </S.Ul>
        {/**/}
        {/**/}
      </S.Main>
    </S.Container>
  )
}

export default ListaDeEmail
