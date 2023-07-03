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
import { ThemeProvider as ThemeStyledComponents } from 'styled-components';
import { createTheme, ThemeProvider as ThemeMaterial } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeStyledComponents theme={CONFIG.theme}>
      <ThemeMaterial theme={createTheme(CONFIG.theme)}>
        <GlobalStyles />
        <App />
      </ThemeMaterial>
    </ThemeStyledComponents>
  </React.StrictMode>
);
