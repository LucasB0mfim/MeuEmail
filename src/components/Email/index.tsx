import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import * as S from './styles'

import lixeira from '../../images/trash.png'

import { removerEmail } from '../../store/reducers/emails'

import ModeloDeEmail from '../../models/ModeloDeEmail'

type Props = ModeloDeEmail

const Email = ({ titulo, descricao, id }: Props) => {
  const dispatch = useDispatch()

  const RemoverEmailClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation() // Impede a propagação do evento de clique
    dispatch(removerEmail(id)) // Remove o e-mail da store
  }

  return (
    <S.Email>
      <S.Clicar to={`/VerEmail/${id}`}>
        <S.Titulo>{titulo}</S.Titulo>
        <S.Descricao>{descricao}</S.Descricao>
      </S.Clicar>
      <S.Lixeira onClick={(event) => RemoverEmailClick(event)}>
        <img src={lixeira} style={{ width: '15px' }} alt="Remover" />
      </S.Lixeira>
    </S.Email>
  )
}

export default Email
