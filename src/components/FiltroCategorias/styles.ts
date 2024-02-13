import styled from 'styled-components'
import { Props } from '.'

export const Categorias = styled.div<Props>`
  width: 200px;
  padding: 20px;
  margin-right: 50px;
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-bottom: ${(props) =>
    props.ativo ? '3px solid #1e90ff' : '2px solid transparent'};
`

export const Label = styled.span`
  font-size: 16px;
`
