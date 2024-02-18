//Formulario

import { useState } from 'react'

import * as S from './styles'

const VerEmail = () => {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')

  return (
    <S.AlinhadorDaMain>
      <S.ConteudoPrincipal>
        <S.Cabecalho>
          <S.BotaoFechar to="/">x</S.BotaoFechar>
        </S.Cabecalho>
        <S.Destino>
          <S.Inputs
            value={titulo}
            onChange={(evento) => setTitulo(evento.target.value)}
            type="text"
            placeholder="Para:"
            disabled={true}
          />
          <S.Inputs
            value={descricao}
            onChange={(evento) => setDescricao(evento.target.value)}
            type="text"
            placeholder="Assunto:"
            disabled={true}
          />
        </S.Destino>
        <S.Mensagem disabled={true} />
      </S.ConteudoPrincipal>
    </S.AlinhadorDaMain>
  )
}
export default VerEmail
