import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Categorias = styled.div<Props>`
  width: 200px;
  padding: 20px;
  margin: 0 25px 0 10px;
  cursor: pointer;
  transition: all linear 0.1s;
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-bottom: ${(props) =>
    props.ativo ? '2px solid #1e90ff' : '2px solid transparent'};

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`

export const Label = styled.span`
  font-size: 16px;
`
