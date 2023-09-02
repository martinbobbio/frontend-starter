import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router.tsx';
import { ThemeWrapper, SEOWrapper, SWRWrapper } from '@/wrappers';
import { GlobalProvider } from '@/contexts';
import GlobalStyles from './GlobalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GlobalProvider>
    <SEOWrapper>
      <SWRWrapper>
        <GlobalStyles />
        <ThemeWrapper>
          <React.StrictMode>
            <Router />
          </React.StrictMode>
        </ThemeWrapper>
      </SWRWrapper>
    </SEOWrapper>
  </GlobalProvider>
);
