//filtro

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/EnumsCategoria'

type buscarEmailState = {
  termo?: string
  criterio: 'categoria'
  valor?: enums.Categoria
}

const initialState: buscarEmailState = {
  termo: '',
  criterio: 'categoria',
  valor: enums.Categoria.PRINCIPAL
}

const buscarEmailSlice = createSlice({
  name: 'buscar',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarEmail: (state, action: PayloadAction<buscarEmailState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTermo, alterarEmail } = buscarEmailSlice.actions
export default buscarEmailSlice.reducer
