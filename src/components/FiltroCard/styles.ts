import styled from 'styled-components'
import { Props } from '.'

type PropsSemLegenda = Omit<Props, 'legenda'>

export const teste = styled.div<PropsSemLegenda>`
  color: ${(props) => (props.ativo ? 'blue' : '#000')};
  border-bottom: ${(props) => (props.ativo ? '2px solid blue' : '')};
  h1 {
    font-size: 16px;
    margin: 30px 150px 30px 50px;
  }
`
