import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100vh;
    width: 100vw;
  }

  #root {
    overflow: hidden;
  }

  body {
    background: ${({ theme }) => theme.colors.dark};
    -webkit-font-smoothing: antialiased !important;
  }
  a {
    color: ${({ theme }) => theme.colors.pink}
  }
  a.hover {
    text-decoration: underline;
  }
  body, input, p, a, button {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.normal};
    font-family: ${({ theme }) => theme.fonts};
  }
  small {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
  button {
    cursor: pointer;
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
