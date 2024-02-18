import styled from 'styled-components'

export const Lixeira = styled.button`
  width: 5%;
  height: 20px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  visibility: hidden;
`

export const Email = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0px 20px;
  cursor: pointer;
  border: none;
  border-bottom: 1px solid #ccc;
  background-color: rgba(255, 255, 255, 0.5);

  &:hover {
    ${Lixeira} {
      visibility: visible;
    }
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export const Titulo = styled.h3`
  width: 15%;
  font-size: 14px;
  font-weight: normal;
`

export const Descricao = styled.span`
  width: 80%;
  color: #8b8b8b;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap; /* Para o texto ficar em uma única linha */
  text-overflow: ellipsis; /* Adiciona '...' quando o texto ultrapassa a largura */
`
