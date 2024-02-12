import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import ListaDeEmail from './containers/ListaDeEmail'
import StyleGlobal, { Container } from './styles'
import { StyleSheetManager } from 'styled-components'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <StyleGlobal />
      <Container>
        <StyleSheetManager shouldForwardProp={() => true}>
          <BarraLateral />
          <ListaDeEmail />
        </StyleSheetManager>
      </Container>
    </Provider>
  )
}

export default App
