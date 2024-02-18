import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import StyleGlobal, { Container } from './styles'
import { StyleSheetManager } from 'styled-components'

import store from './store'

import Home from './pages/Home'
import NovoEmail from './pages/NovoEmail'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/NovoEmail',
    element: <NovoEmail />
  }
])

function App() {
  return (
    <Provider store={store}>
      <StyleGlobal />
      <Container>
        <StyleSheetManager shouldForwardProp={() => true}>
          <RouterProvider router={rotas} />
        </StyleSheetManager>
      </Container>
    </Provider>
  )
}

export default App
