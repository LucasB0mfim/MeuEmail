import * as S from './styles'

export type Props = {
  ativo?: boolean
}

const Filtro = (props: Props) => {
  return <S.Categorias ativo={props.ativo}>Favoritos</S.Categorias>
}

export default Filtro
