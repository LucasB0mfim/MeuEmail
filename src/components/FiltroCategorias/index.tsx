import * as S from './styles'

export type Props = {
  ativo: boolean
}

const FiltroCategorias = (props: Props) => (
  <S.Categorias ativo={props.ativo}>
    <S.Label>Principal</S.Label>
  </S.Categorias>
)

export default FiltroCategorias
