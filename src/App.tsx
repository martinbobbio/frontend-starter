// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import { Detail, Home, NotFound } from '@/views';
import { AppWrapper } from '@/components';
// Contexts
import { GlobalProvider } from '@/contexts';
// Constants
import { SupportedPages } from '@/constants';

/**
 * Functional component that render the router and wrap the application.
 *
 * @return React.ReactElement <Main/>
 */
const App = () => {
  /**
   * Functional component that wrap the views and add logics.
   *
   */
  const wrapApplication = (view: React.ReactNode) => {
    return <AppWrapper>{view}</AppWrapper>;
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
};

export default App;
