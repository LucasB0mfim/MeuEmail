import FiltroCard from '../../components/FiltroCard'
import Tarefa from '../Tarefa'
import * as S from './styles'

const tarefas = [
  {
    titulo: 'Conheça a nova política da empresa',
    descricao: 'A NU atualizou as suas políticas de...'
  },
  {
    titulo: 'Cartão de crédito',
    descricao: 'Seu cartão de crédito foi aprovado...'
  },
  {
    titulo: 'A sua NFE já está disponível',
    descricao: 'Receba agora a NFE da sua...'
  }
]

const ListaDeEmail = () => (
  <S.Container>
    <S.Main>
      <S.Categoria>
        <FiltroCard legenda="Principal" ativo />
        <FiltroCard legenda="Promoções" />
        <FiltroCard legenda="Social" />
      </S.Categoria>
      <S.Ul>
        {tarefas.map((email) => (
          //usei a key para não repetir o titulo
          <li key={email.titulo}>
            <Tarefa titulo={email.titulo} descricao={email.descricao} />
          </li>
        ))}
      </S.Ul>
    </S.Main>
  </S.Container>
)

export default ListaDeEmail
