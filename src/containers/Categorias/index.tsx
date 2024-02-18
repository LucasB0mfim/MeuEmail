//barra lateral

import { useDispatch, useSelector } from 'react-redux'
import FiltroCategorias from '../../components/FiltroCategorias'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/buscarEmail'

import * as enums from '../../utils/enums/EnumsCategoria'

const Categorias = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.buscarEmail)

  return (
    <S.Container>
      <FiltroCategorias
        valor={enums.Categoria.PRINCIPAL}
        criterio={'categoria'}
        legenda="Principal"
      />
      <FiltroCategorias
        valor={enums.Categoria.PROMOCAO}
        criterio={'categoria'}
        legenda="Promoção"
      />
      <FiltroCategorias
        valor={enums.Categoria.SOCIAL}
        criterio={'categoria'}
        legenda="Social"
      />
      <S.BarraDePesquisa
        type="text"
        placeholder="Pesquisar"
        value={termo}
        onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
      />
    </S.Container>
  )
}

export default Categorias
