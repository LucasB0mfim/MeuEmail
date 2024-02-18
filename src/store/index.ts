import { configureStore } from '@reduxjs/toolkit'

import emailsReducer from './reducers/emails'
import buscarEmailReducer from './reducers/buscarEmail'

const store = configureStore({
  reducer: {
    emails: emailsReducer,
    buscarEmail: buscarEmailReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
