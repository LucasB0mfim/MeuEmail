import StyleGlobal, { Container } from './styles'
import BarraLateral from './containers/BarraLateral'
import ConteudoPrincipal from './containers/ConteudoPrincipal'
import { StyleSheetManager } from 'styled-components'

function App() {
  return (
    <>
      <StyleGlobal />
      <Container>
        <StyleSheetManager shouldForwardProp={() => true}>
          <BarraLateral />
          <ConteudoPrincipal />
        </StyleSheetManager>
      </Container>
    </>
  )
}

export default App
