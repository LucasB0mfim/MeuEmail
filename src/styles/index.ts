import styled, { createGlobalStyle } from 'styled-components'

const StyleGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 14px;
  }
`

export const Container = styled.div`
  display: flex;
`

export default StyleGlobal
