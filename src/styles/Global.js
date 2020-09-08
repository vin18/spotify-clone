import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    font-family: Open-Sans, sans-serif;
    line-height: 1.6;
    min-height: 100vh;
    letter-spacing: .05rem;
  } 

  body::-webkit-scrollbar {
    display: none;
  }
`;
