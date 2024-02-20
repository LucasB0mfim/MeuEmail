import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AlinhadorDaMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ConteudoPrincipal = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 10px;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.8);

  /* Largura da barra de rolagem */
  &::-webkit-scrollbar {
    width: 8px;
  }

  /* Cor do controle da barra de rolagem */
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  /* Cor do fundo da barra de rolagem */
  &::-webkit-scrollbar-track {
    background-color: #ccc;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 95%;
    height: 80vh;
  }
`
export const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 80px;
  width: 100%;
`

export const BotaoFechar = styled(Link)`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  right: 7%;
  width: 30px;
  height: 30px;
  padding: 5px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 3px;
  border: 1px solid transparent;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    color: #000;
  }
`

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Span = styled.span`
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 10px;
  font-size: 14px;
  color: #676767;
  outline: none;
  border: none;
  border-bottom: 2px solid #ccc;
  background-color: rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const Mensagem = styled.textarea`
  font-size: 14px;
  color: #595959;
  resize: none;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 12px;
  }
`
