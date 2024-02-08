import styled from 'styled-components'
import { Props } from '.'

export const Categorias = styled.button<Props>`
  display: block;
  height: 30px;
  width: 30px;
  margin-bottom: 5px;
  border: none;
  border-radius: 50%;
  color: ${(props) => (props.ativo ? 'blue' : '#5e5e5e')};
  background-color: ${(props) => (props.ativo ? '#fcfcfc' : '')};
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`
