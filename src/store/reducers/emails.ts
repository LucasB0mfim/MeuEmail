import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Email from '../../models/Email'
import * as enums from '../../utils/enums/Email'

type EmailsState = {
  itens: Email[]
}

const emailInicial: EmailsState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar JavaScript',
      descricao:
        'Seja para descansar ou cair na folia, desejamos que aproveite muito o seu Carnaval! Nós já estamos aqui preparando um pós Carnaval com ...',
      secao: enums.Secao.PRINCIPAL
    },
    {
      id: 2,
      titulo: 'Estudar TypeScript',
      descricao:
        'Seja para descansar ou cair na folia, desejamos que aproveite muito o seu Carnaval! Nós já estamos aqui preparando um pós Carnaval com ...',
      secao: enums.Secao.PROMOCAO
    }
  ]
}

const emailsSlice = createSlice({
  name: 'emails',
  initialState: emailInicial,
  reducers: {
    //função para remover um email
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((email) => email.id !== action.payload)
    }
  }
})

export const { remover } = emailsSlice.actions
export default emailsSlice.reducer
