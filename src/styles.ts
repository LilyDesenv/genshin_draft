import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  black: '#000',
  yellow: '#ff0',
  red: '#f00',
  blue: '#00f',
  green: '#0f0',
  gray: '#dadada'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCSS = createGlobalStyle`


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: MuseoSans, sans-serif;
    font-weight: 500;
    list-style: none;
  }

  body{
    background-color: ${colors.black};
    color: ${colors.white};

  }

  .displayBlock {
    display: block;
  }

  .displayNone {
    display: none;
  }

  .alignCenter {
    display: flex;
    align-items: center;
    justify-content: center;
  }

`
