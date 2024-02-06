import styled, { createGlobalStyle } from 'styled-components'

const StyleGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 16px;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export default StyleGlobal
