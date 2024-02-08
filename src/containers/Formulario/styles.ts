import styled from 'styled-components'

export type Props = {
  ativo?: string
}

export const Main = styled.main`
  width: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: 95%;
  height: 90vh;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
`

export const Categoria = styled.a<Props>`
  color: #000;
  width: 100px;
  padding: 20px 50px;
  margin-right: 20px;
  font-size: 16px;
  font-family: sans-serif;
  border: none;
  border-bottom: ${(props) => (props.ativo ? '2px solid blue' : '')};
`
export const Linha = styled.div`
  border: none;
  border-bottom: 1px solid #ccc;
  margin-top: 20px;
`
