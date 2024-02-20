import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Lixeira = styled.button`
  height: 20px;
  width: 10%;
  height: 39px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  visibility: hidden;

  @media (max-width: 768px) {
    width: 5%;
    visibility: visible;
  }
`

export const Email = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0px 20px;
  cursor: pointer;
  border: none;
  border-bottom: 1px solid #ccc;
  background-color: rgba(255, 255, 255, 0.5);

  &:hover {
    ${Lixeira} {
      visibility: visible;
    }
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0px 10px;
  }
`

export const Clicar = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 39px;
  color: #000;

  @media (max-width: 768px) {
    max-width: 95%;
  }
`

export const Titulo = styled.h3`
  display: flex;
  align-items: center;
  width: 15%;
  height: 39px;
  font-size: 14px;
  font-weight: normal;

  @media (max-width: 768px) {
    width: 20%;
    font-size: 12px;
  }
`

export const Descricao = styled.span`
  display: flex;
  align-items: center;
  width: 80%;
  height: 39px;
  color: #8b8b8b;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap; /* Para o texto ficar em uma única linha */
  text-overflow: ellipsis; /* Adiciona '...' quando o texto ultrapassa a largura */

  @media (max-width: 768px) {
    width: 75%;
    font-size: 12px;
  }
`
