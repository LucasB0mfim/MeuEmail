import styled from 'styled-components'

export const AlinhadorDaMain = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ConteudoPrincipal = styled.main`
  width: 98%;
  height: 90vh;
  overflow-y: auto;
  border-radius: 10px;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.8);

  /* Largura da barra de rolagem */
  &::-webkit-scrollbar {
    width: 8px;
  }

  /* Cor do controle da barra de rolagem */
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  /* Cor do fundo da barra de rolagem */
  &::-webkit-scrollbar-track {
    background-color: #ccc;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`

export const Linha = styled.div`
  background-color: #c0c0c0;
  height: 1px;
`
