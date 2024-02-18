import * as S from './styles'

const VerEmail = () => {
  return (
    <S.AlinhadorDaMain>
      <S.ConteudoPrincipal>
        <S.Cabecalho>
          <S.BotaoFechar to="/">x</S.BotaoFechar>
        </S.Cabecalho>
        <S.Formulario>
          <S.Span />
          <S.Span />
        </S.Formulario>
        <S.Mensagem disabled={true} />
      </S.ConteudoPrincipal>
    </S.AlinhadorDaMain>
  )
}
export default VerEmail
