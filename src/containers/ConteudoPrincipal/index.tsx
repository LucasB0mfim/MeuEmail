//Lista de Tarefas

import { useSelector } from 'react-redux'

import Email from '../../components/Email'
import Categorias from '../../containers/Categorias'
import * as S from './styles'

import { RootReducer } from '../../store'

const ConteudoPrincipal = () => {
  //Para usar a store:
  const { itens } = useSelector((state: RootReducer) => state.emails)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.buscarEmail
  )

  const filtrarEmail = () => {
    let emailsFiltrados = [...itens] // Cria uma cópia da matriz original

    // Filtra por termo de busca
    if (termo) {
      emailsFiltrados = emailsFiltrados.filter((item) =>
        item.titulo.toLowerCase().includes(termo.toLowerCase())
      )
    }

    // Filtra por categoria, se houver
    if (criterio === 'categoria' && valor) {
      emailsFiltrados = emailsFiltrados.filter(
        (item) => item.categoria === valor
      )
    }

    return emailsFiltrados
  }

  return (
    <S.AlinhadorDaMain>
      <S.ConteudoPrincipal>
        <Categorias />
        <S.Linha />
        <ul>
          <li>{termo}</li>
          <li>{criterio}</li>
          <li>{valor}</li>
        </ul>
        <ul>
          {filtrarEmail().map((e) => (
            <li key={e.titulo}>
              <Email
                titulo={e.titulo}
                descricao={e.descricao}
                categoria={e.categoria}
                id={e.id}
              />
            </li>
          ))}
        </ul>
      </S.ConteudoPrincipal>
    </S.AlinhadorDaMain>
  )
}

export default ConteudoPrincipal
