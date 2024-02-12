import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Email from '../../models/Email'

const emailsSlice = createSlice({
  name: 'emails',
  initialState: [
    new Email(
      'Estudar JavaScript',
      'Seja para descansar ou cair na folia, desejamos que aproveite muito o seu Carnaval! Nós já estamos aqui preparando um pós Carnaval com ...',
      1
    ),
    new Email(
      'Estudar JavaScript',
      'Seja para descansar ou cair na folia, desejamos que aproveite muito o seu Carnaval! Nós já estamos aqui preparando um pós Carnaval com ...',
      2
    ),
    new Email(
      'Estudar JavaScript',
      'Seja para descansar ou cair na folia, desejamos que aproveite muito o seu Carnaval! Nós já estamos aqui preparando um pós Carnaval com ...',
      3
    ),
    new Email(
      'Estudar JavaScript',
      'Seja para descansar ou cair na folia, desejamos que aproveite muito o seu Carnaval! Nós já estamos aqui preparando um pós Carnaval com ...',
      4
    ),
    new Email(
      'Estudar JavaScript',
      'Seja para descansar ou cair na folia, desejamos que aproveite muito o seu Carnaval! Nós já estamos aqui preparando um pós Carnaval com ...',
      5
    ),
    new Email(
      'Estudar JavaScript',
      'Seja para descansar ou cair na folia, desejamos que aproveite muito o seu Carnaval! Nós já estamos aqui preparando um pós Carnaval com ...',
      6
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((email) => email.id !== action.payload)
    }
  }
})

export const { remover } = emailsSlice.actions
export default emailsSlice.reducer
