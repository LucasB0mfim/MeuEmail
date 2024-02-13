import styled from 'styled-components'

type Props = {
  ativo?: boolean
}

export const Secao = styled.button<Props>`
  border: none;
  background-color: transparent;
  color: ${(props) => (props.ativo ? 'blue' : '#000')};
  border-bottom: ${(props) => (props.ativo ? '2px solid blue' : '')};
  cursor: pointer;
  h1 {
    font-size: 16px;
    margin: 30px 150px 30px 50px;
  }
`
