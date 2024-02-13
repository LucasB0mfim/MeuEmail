// isso é uma classe

import * as enums from '../utils/enums/Email'

class Email {
  titulo: string
  descricao: string
  id: number
  secao: enums.Secao

  constructor(
    titulo: string,
    descricao: string,
    id: number,
    secao: enums.Secao
  ) {
    this.titulo = titulo
    this.descricao = descricao
    this.id = id
    this.secao = secao
  }
}

export default Email
