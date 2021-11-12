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
    font-weight: 500;
  }
  body {
    font-family: "roboto";
    overflow-y: scroll;
  }
`;

export default GlobalStyle;
