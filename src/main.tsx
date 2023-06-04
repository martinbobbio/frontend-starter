// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Components
import App from './App.tsx';
// Styles
import GlobalStyles from './GlobalStyles.ts';
// Libreries
import { ThemeProvider } from 'styled-components';
import { MyTheme } from './vite-env';

const theme: MyTheme = {
  colors: {
    primary: '#2196f3',
    secondary: '#f50057',
    white: '#ffffff',
    black: '#000000',
  },
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
