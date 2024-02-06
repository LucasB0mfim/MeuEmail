import styled from 'styled-components'
import { Props } from '.'

export const Categorias = styled.div<Props>`
  padding: 8px;
  border: 1px solid #a1a1a1;
  background-color: #fcfcfc;
  color: ${(props) => (props.ativo ? 'green' : '#5e5e5e')};
  margin-bottom: 8px;
`
