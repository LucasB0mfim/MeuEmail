//tarefas

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ModeloDeEmail from '../../models/ModeloDeEmail'
import * as enums from '../../utils/enums/EnumsCategoria'

type EmailState = {
  itens: ModeloDeEmail[]
}

const initialState: EmailState = {
  itens: [
    {
      id: 1,
      titulo: 'Ebac',
      descricao: 'Estude TypeScript - Entre agora na lista de atividas...',
      categoria: enums.Categoria.PRINCIPAL
    },
    {
      id: 2,
      titulo: 'Shopee',
      descricao:
        'Oferta de Carnaval Shopee - Compras acima de R$ 200,00 tem direito a um cupom de 10%...',
      categoria: enums.Categoria.PROMOCAO
    },
    {
      id: 3,
      titulo: 'LinkedIn',
      descricao:
        'Você conhece Marta dos Santos? - Entre no LinkedIn para fazer uma conexão com ela...',
      categoria: enums.Categoria.PRINCIPAL
    },
    {
      id: 4,
      titulo: 'Discord',
      descricao:
        'Alguém ligou para você! - Entre no discord e veja quem ligou para você agora mesmo... ',
      categoria: enums.Categoria.SOCIAL
    },
    {
      id: 5,
      titulo: 'Ebac Tarefa',
      descricao:
        'A sua tarefa foi conluída - Veja qual foi a sua nota na avaliação EBAC...',
      categoria: enums.Categoria.SOCIAL
    }
  ]
}

const emailSlice = createSlice({
  name: 'emails',
  initialState: initialState,
  reducers: {
    removerEmail: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((email) => email.id !== action.payload)
    }
  }
})

export const { removerEmail } = emailSlice.actions
export default emailSlice.reducer
