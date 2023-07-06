// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import { Detail, Home, NotFound } from '@/views';
import { AppWrapper, Disclaimer, Header } from '@/components';
// Contexts
import { GlobalProvider } from '@/contexts';
// Constants
import { SupportedPages } from '@/constants';

function App() {
  const wrapApplication = (view: React.ReactNode) => {
    return (
      <AppWrapper>
        <Header />
        <Disclaimer />
        {view}
      </AppWrapper>
    );
  };

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route
            path={SupportedPages.Home}
            element={wrapApplication(<Home />)}
          />
          <Route
            path={SupportedPages.Detail}
            element={wrapApplication(<Detail />)}
          />
          <Route
            path={SupportedPages.NotFound}
            element={wrapApplication(<NotFound />)}
          />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
