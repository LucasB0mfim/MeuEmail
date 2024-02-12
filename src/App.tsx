import BarraLateral from './containers/BarraLateral'
import ListaDeEmail from './containers/ListaDeEmail'
import StyleGlobal, { Container } from './styles'
import { StyleSheetManager } from 'styled-components'

function App() {
  return (
    <>
      <StyleGlobal />
      <Container>
        <StyleSheetManager shouldForwardProp={() => true}>
          <BarraLateral />
          <ListaDeEmail />
        </StyleSheetManager>
      </Container>
    </>
  )
}

export default App
