import BarraLateral from './containers/BarraLateral'
import Formulario from './containers/Formulario'
import StyleGlobal, { Container } from './styles'
import { StyleSheetManager } from 'styled-components'

function App() {
  return (
    <>
      <StyleGlobal />
      <Container>
        <StyleSheetManager shouldForwardProp={() => true}>
          <BarraLateral />
          <Formulario />
        </StyleSheetManager>
      </Container>
    </>
  )
}

export default App
