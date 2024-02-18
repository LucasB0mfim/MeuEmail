//filtro card

import { useDispatch, useSelector } from 'react-redux'
import { alterarEmail } from '../../store/reducers/buscarEmail'
import * as S from './styles'
import * as enums from '../../utils/enums/EnumsCategoria'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'categoria'
  valor?: enums.Categoria
}

const FiltroCategorias = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()

  //categoria ativa
  const { buscarEmail } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = buscarEmail.criterio === criterio
    const mesmoValor = buscarEmail.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const filtrar = () => {
    dispatch(
      alterarEmail({
        criterio,
        valor
      })
    )
  }

  const ativo = verificaEstaAtivo()

  return (
    <S.Categorias ativo={ativo} onClick={filtrar}>
      <S.Label>{legenda}</S.Label>
    </S.Categorias>
  )
}

export default FiltroCategorias
