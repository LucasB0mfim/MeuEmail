import styled, { createGlobalStyle } from 'styled-components'
import wallpaper from '../images/wallpaper.jpg'

const StyleGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: sans-serif;
  }
`

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  background-size: cover;
  background-image: url(${wallpaper});
`

export default StyleGlobal
