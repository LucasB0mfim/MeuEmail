import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BarraLateral = styled.aside`
  display: flex;
  justify-content: center;
  height: 90vh;
  width: 5%;

  @media (max-width: 768px) {
    width: 0%;
  }
`

export const BotaoEscrever = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    position: absolute;
    right: 5%;
    bottom: 5%;
  }
`
