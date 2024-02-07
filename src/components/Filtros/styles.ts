import styled from 'styled-components'
import { Props } from '.'

export const Categorias = styled.button<Props>`
  display: block;
  width: 30px;
  padding: 5px;
  border: none;
  border-radius: 50%;
  color: ${(props) => (props.ativo ? 'blue' : '#5e5e5e')};
  background-color: ${(props) => (props.ativo ? '#fcfcfc' : '')};
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`
