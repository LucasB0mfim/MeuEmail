//Nesse arquivo vai ficar a construção de cada Email

import * as S from './styles'

type Props = {
  titulo: string
  descricao: string
}

const Tarefa = ({ titulo, descricao }: Props) => (
  <S.Card>
    <S.Titulo>{titulo}</S.Titulo>
    <S.Descricao>{descricao}</S.Descricao>
  </S.Card>
)

export default Tarefa
