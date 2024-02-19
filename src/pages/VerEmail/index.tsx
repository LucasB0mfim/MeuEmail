import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootReducer } from '../../store'

import * as S from './styles'

const VerEmail = () => {
  const { id } = useParams<{ id?: string }>() // Observe que id é opcional (string | undefined)
  const email = useSelector(
    (state: RootReducer) =>
      id ? state.emails.itens.find((e) => e.id === parseInt(id)) : null // Verifica se id existe antes de procurar o email
  )

  if (!email) {
    return <div>Email não encontrado</div>
  }

  return (
    // <div>
    //   <h2>{email.titulo}</h2>
    //   <p>{email.descricao}</p>
    //   <p>{email.categoria}</p>
    // </div>
    <S.AlinhadorDaMain>
      <S.ConteudoPrincipal>
        <S.Cabecalho>
          <S.BotaoFechar to="/">x</S.BotaoFechar>
        </S.Cabecalho>
        <S.Formulario>
          <S.Span>{email.titulo}</S.Span>
          <S.Span>{email.descricao}</S.Span>
        </S.Formulario>
        <S.Mensagem value={email.texto} disabled={true} />
      </S.ConteudoPrincipal>
    </S.AlinhadorDaMain>
  )
}

export default VerEmail
