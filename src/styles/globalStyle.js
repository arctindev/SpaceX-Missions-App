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
    /* background: #323237;  background color for linear gradient*/
    background: ${({ theme }) => theme.backgroundColor.linearBlack};
  }
`;

export default GlobalStyle;
