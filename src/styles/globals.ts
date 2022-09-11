import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  :focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }

  button {
    line-height: 1.6;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.base.text};
    -webkit-font-smoothing: antialiased;
  }
`;
