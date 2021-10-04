import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto', sans-serif;
    font-size: 0.625em;
  }

`;

export default GlobalStyle;
