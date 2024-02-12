import styled, { createGlobalStyle } from 'styled-components'
import wallpaper from '../images/wallpaper.jpg'

const StyleGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 14px;
    text-decoration: none;
  }
`

export const Container = styled.div`
  display: flex;
  background-image: url(${wallpaper});
  background-size: cover;
`

export default StyleGlobal
