import * as enums from '../utils/enums/EnumsCategoria'

class ModeloDeEmail {
  titulo: string
  descricao: string
  categoria: enums.Categoria
  id: number

  constructor(
    titulo: string,
    descricao: string,
    categoria: enums.Categoria,
    id: number
  ) {
    this.titulo = titulo
    this.descricao = descricao
    this.categoria = categoria
    this.id = id
  }
}

export default ModeloDeEmail
