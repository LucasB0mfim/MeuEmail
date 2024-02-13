import styled from 'styled-components'

export const Remover = styled.button`
  display: flex;
  position: fixed;
  right: 2%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  visibility: hidden;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0 20px;
  height: 40px;
  border: 1px solid #ccc;
  border-left: none;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);

    ${Remover} {
      visibility: visible;
    }
  }
`

export const Titulo = styled.h3`
  width: 220px;
`

export const Descricao = styled.span`
  color: #585858;
`
