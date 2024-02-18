//Formulario

import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import * as enums from '../../utils/enums/EnumsCategoria'
import ModeloDeEmail from '../../models/ModeloDeEmail'
import { enviar } from '../../store/reducers/emails'

const EnviandoEmail = () => {
  // ESSE PEDAÇO DE CÓDIGO SERVA PARA ENVIAR UM EMAIL
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [categoria, setCategoria] = useState(enums.Categoria.PRINCIPAL)

  const enviarEmail = (evento: FormEvent) => {
    evento.preventDefault()
    const emailParaAdicionar = new ModeloDeEmail(
      `Enviado para: ${titulo}`,
      descricao,
      categoria,
      9
    )
    dispatch(enviar(emailParaAdicionar))
    navigate('/')
  }
  // ESSE PEDAÇO DE CÓDIGO SERVA PARA ENVIAR UM EMAIL

  return (
    <S.AlinhadorDaMain>
      <S.ConteudoPrincipal>
        <S.Cabecalho>
          <S.NovaMensagem>Nova Mensagem</S.NovaMensagem>
          <S.BotaoFechar to="/">x</S.BotaoFechar>
        </S.Cabecalho>
        <S.Destino onSubmit={enviarEmail}>
          <S.Opcoes>
            {/*  //  */}
            {/*  //  */}
            {/*  aqui vai ficar as opções de categorias antes de enviar um email: Principal, Promoção ou Social  */}
            {Object.values(enums.Categoria).map((categoria) => (
              <S.Opcao key={categoria}>
                <input
                  value={categoria}
                  name="categoria"
                  type="radio"
                  onChange={(evento) =>
                    setCategoria(evento.target.value as enums.Categoria)
                  }
                  id={categoria}
                  defaultChecked={categoria === enums.Categoria.PRINCIPAL}
                />{' '}
                <label htmlFor={categoria}>{categoria}</label>
              </S.Opcao>
            ))}
            {/*  //  */}
            {/*  //  */}
          </S.Opcoes>

          <S.Inputs
            value={titulo}
            onChange={(evento) => setTitulo(evento.target.value)}
            type="text"
            placeholder="Para:"
            required
          />
          <S.Inputs
            value={descricao}
            onChange={(evento) => setDescricao(evento.target.value)}
            type="text"
            placeholder="Assunto:"
            required
          />
          <S.BotaoEnviar type="submit">enviar</S.BotaoEnviar>
        </S.Destino>
        <S.Mensagem />
      </S.ConteudoPrincipal>
    </S.AlinhadorDaMain>
  )
}
export default EnviandoEmail
