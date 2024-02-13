//Nesse arquivo vai ficar a construção de cada Email
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover } from '../../store/reducers/emails'
import lixo from '../../images/trash.png'
import EmailClass from '../../models/Email'

export type Props = EmailClass

const Email = ({ titulo, descricao, id }: Props) => {
  //chamamos a função e guardamos o retorno no dispatch
  const dispatch = useDispatch()

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Descricao>{descricao}</S.Descricao>
      <S.Remover type="submit" onClick={() => dispatch(remover(id))}>
        <img
          src={lixo}
          style={{
            width: '18px'
          }}
        />
      </S.Remover>
    </S.Card>
  )
}

export default Email
