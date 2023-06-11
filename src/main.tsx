// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Components
import App from './App.tsx';
// Styles
import GlobalStyles from './GlobalStyles.ts';
// Constants
import { CONFIG } from '@/constants';
// Libreries
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={CONFIG.theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
