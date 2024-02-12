import styled from 'styled-components'
import { Props } from '.'

type PropsSemLegenda = Omit<Props, 'legenda'>

export const teste = styled.div<PropsSemLegenda>`
  color: ${(props) => (props.ativo ? 'blue' : '#000')};
  h1 {
    font-size: 16px;
    margin-right: 20px;
  }
`
