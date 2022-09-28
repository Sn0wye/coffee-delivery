import { ThemeProvider } from 'styled-components';

import { Router } from './components/Router';
import { GlobalStyle } from './styles/globals';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
}
