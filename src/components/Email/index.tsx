//Tarefa

import { useDispatch } from 'react-redux'

import * as S from './styles'

import lixeira from '../../images/trash.png'

import { removerEmail } from '../../store/reducers/emails'

import ModeloDeEmail from '../../models/ModeloDeEmail'

type Props = ModeloDeEmail

const Email = ({ titulo, descricao, categoria, id }: Props) => {
  //remover email
  const dispatch = useDispatch()

  return (
    <S.Email onClick={(evento) => console.log(evento.target)}>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Descricao>{descricao}</S.Descricao>
      <div>{categoria}</div>
      <S.Lixeira onClick={() => dispatch(removerEmail(id))}>
        <img src={lixeira} style={{ width: '15px' }} />
      </S.Lixeira>
    </S.Email>
  )
}

export default Email
