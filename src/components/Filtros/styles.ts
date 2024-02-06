import styled from 'styled-components'
import { Props } from '.'

export const Categorias = styled.button<Props>`
  padding: 5px;
  border: none;
  border-radius: 25px;
  background-color: ${(props) => (props.ativo ? '#fcfcfc' : '')};
  color: ${(props) => (props.ativo ? 'green' : '#5e5e5e')};
  margin-left: -10px;
  display: block;
  width: 100%;
  cursor: pointer;
`
