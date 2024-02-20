import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Categorias = styled.div<Props>`
  width: 200px;
  padding: 20px;
  margin-left: 10px;
  cursor: pointer;
  transition: all linear 0.1s;
  color: ${(props) => (props.ativo ? '#0081ff' : '#5e5e5e')};
  border-bottom: ${(props) =>
    props.ativo ? '2px solid #0081ff' : '2px solid transparent'};

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

export const Label = styled.span`
  font-size: 16px;
`
