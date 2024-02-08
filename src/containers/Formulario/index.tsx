import { useState } from 'react'
import * as S from './styles'

const Formulario = () => {
  const [ativo, setAtivo] = useState('Principal')

  const selecionar = (categoria: string) => {
    setAtivo(categoria)
  }

  return (
    <S.Main>
      <S.Container>
        <div>
          <S.Categoria
            href="#"
            ativo={ativo === 'Principal' ? 'true' : undefined}
            onClick={() => selecionar('Principal')}
          >
            Principal
          </S.Categoria>
          <S.Categoria
            href="#"
            ativo={ativo === 'Promoções' ? 'true' : undefined}
            onClick={() => selecionar('Promoções')}
          >
            Promoções
          </S.Categoria>
          <S.Categoria
            href="#"
            ativo={ativo === 'Social' ? 'true' : undefined}
            onClick={() => selecionar('Social')}
          >
            Social
          </S.Categoria>
          <S.Linha></S.Linha>
        </div>
      </S.Container>
    </S.Main>
  )
}

export default Formulario
