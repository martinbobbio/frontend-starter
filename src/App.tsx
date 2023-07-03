// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import { Detail, Home, NotFound } from '@/views';
import { Disclaimer, Header } from '@/components';
// Contexts
import { GlobalProvider } from '@/contexts';

function App() {
  const wrapApplication = (view: React.ReactNode) => (
    <>
      <Header />
      <Disclaimer />
      {view}
    </>
  );

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path='/' element={wrapApplication(<Home />)} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
