import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Email'

type FiltroDaSecaoState = {
  termo?: string
  criterio: 'Principal' | 'Promoção' | 'Social'
  valor?: enums.Secao
}

const initalState: FiltroDaSecaoState = {
  termo: '',
  criterio: 'Principal'
}

const FiltroDaSecaoSlice = createSlice({
  name: 'filtro',
  initialState: initalState,
  reducers: {
    alterarFiltro: (state, action: PayloadAction<FiltroDaSecaoState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alterarFiltro } = FiltroDaSecaoSlice.actions
export default FiltroDaSecaoSlice.reducer
