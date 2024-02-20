import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
`

export const BarraDePesquisa = styled.input`
  position: absolute;
  right: 8%;
  width: 300px;
  height: 30px;
  padding-left: 5px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.4);
  border: 2px solid transparent;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    top: 12%;
    right: 12%;
  }
`
