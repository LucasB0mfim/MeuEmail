import * as S from './styles'

export type Props = {
  ativo?: boolean
  legenda: string
}

const FiltroCard = ({ ativo, legenda }: Props) => (
  <S.teste ativo={ativo}>
    <h1>{legenda}</h1>
  </S.teste>
)

export default FiltroCard
