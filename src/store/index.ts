import { configureStore } from '@reduxjs/toolkit'

import emailsReducer from './reducers/emails'
import filtroDaSecaoReducer from './reducers/filtroDaSecao'

const store = configureStore({
  reducer: {
    emails: emailsReducer,
    filtroDaSecao: filtroDaSecaoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
