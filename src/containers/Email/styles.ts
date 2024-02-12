import styled from 'styled-components'
import { Props } from '.'

export const Card = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 40px;
  border: 1px solid #ccc;
  border-left: none;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  }
`

export const Titulo = styled.h3`
  margin-right: 30px;
  width: 220px;
`

export const Descricao = styled.span`
  color: #585858;
`
