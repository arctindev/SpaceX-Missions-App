import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
  body {
    font-family: "roboto";
  }
`;

export default GlobalStyle;
