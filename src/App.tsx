import BarraLateral from './containers/BarraLateral'
import Formulario from './containers/Formulario'
import StyleGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <StyleGlobal />
      <Container>
        <BarraLateral />
        <Formulario />
      </Container>
    </>
  )
}

export default App
