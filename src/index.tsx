// React
import React, {Suspense, StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Route, Routes} from 'react-router';
import {HashRouter} from 'react-router-dom';
// Views
import {Home, Welcome} from '@views';
// Context
import {AppContext} from '@contexts';

// Vars
const container = document.getElementById('app');
const root = createRoot(container);

// Render
root.render(
    <AppContext>
      <StrictMode>
        <Suspense>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Welcome />}/>
              <Route path='home' element={<Home />} />
            </Routes>
          </HashRouter>
        </Suspense>
      </StrictMode>
    </AppContext>,
);
