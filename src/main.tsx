// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Components
import App from './App.tsx';
// Styles
import GlobalStyles from './GlobalStyles.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
