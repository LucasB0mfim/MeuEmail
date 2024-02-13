import { useDispatch } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtroDaSecao'
import * as enums from '../../utils/enums/Email'

export type Props = {
  ativo?: boolean
  secao: string
  criterio: 'Principal' | 'Promoção' | 'Social'
  valor?: enums.Secao
}

const FiltroCard = ({ ativo, secao, criterio, valor }: Props) => {
  const dispatch = useDispatch()

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  return (
    <S.Secao ativo={ativo} onClick={filtrar}>
      <h1>{secao}</h1>
    </S.Secao>
  )
}

export default FiltroCard
