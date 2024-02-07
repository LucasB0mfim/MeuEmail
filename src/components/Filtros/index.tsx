import * as S from './styles'

export type Props = {
  ativo?: string
}

const Filtro = (props: Props) => {
  return <S.Categorias ativo={props.ativo}>E</S.Categorias>
}

export default Filtro
