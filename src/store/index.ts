import { configureStore } from '@reduxjs/toolkit'

import emailsReducer from './reducers/emails'

const store = configureStore({
  reducer: {
    emails: emailsReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
