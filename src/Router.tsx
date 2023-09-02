import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FAIcons, FAIconsDetail, Home, NotFound } from '@/views';
import App from '@/App';
import { SupportedPages } from '@/constants';

/**
 * Functional component that render the router and wrap the application.
 *
 * @return React.ReactElement <Router/>
 */
const Router = () => {
  /**
   * Functional component that wrap the views and add logics.
   *
   */
  const wrapApplication = (view: React.ReactNode) => {
    return <App>{view}</App>;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={SupportedPages.Home} element={wrapApplication(<Home />)} />
        <Route
          path={SupportedPages.Components}
          element={wrapApplication(<Home />)}
        />
        <Route
          path={SupportedPages.FAIcons}
          element={wrapApplication(<FAIcons />)}
        />
        <Route
          path={SupportedPages.FAIconsDetail}
          element={wrapApplication(<FAIconsDetail />)}
        />
        <Route
          path={SupportedPages.AxiosAndSWR}
          element={wrapApplication(<Home />)}
        />
        <Route
          path={SupportedPages.NotFound}
          element={wrapApplication(<NotFound />)}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
