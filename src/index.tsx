// React
import React, {Suspense, StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Route, Routes} from 'react-router';
import {HashRouter} from 'react-router-dom';
// Views
import {Home, Welcome} from '@views';
// Components
import {AppWrapper} from '@components';
// Context
import {AppContext} from '@contexts';
// Styles
import GlobalStyle from './globalStyles';
import '@assets/css/tailwind.css';

// Vars
const container = document.getElementById('app');
const root = createRoot(container);

const _wrapView = (element: React.ReactElement, tag = '') => (
  <AppWrapper tag={tag}>
    {element}
  </AppWrapper>
);

// Render
root.render(
    <AppContext>
      <GlobalStyle/>
      <StrictMode>
        <Suspense>
          <HashRouter>
            <Routes>
              <Route path="/" element={_wrapView(<Welcome/>, 'welcome')}/>
              <Route path='home' element={_wrapView(<Home/>)} />
            </Routes>
          </HashRouter>
        </Suspense>
      </StrictMode>
    </AppContext>,
);
