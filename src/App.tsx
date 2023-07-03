// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import { Detail, Home, NotFound } from '@/views';
import { Disclaimer, Header } from '@/components';

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
      <Routes>
        <Route path='/' element={wrapApplication(<Home />)} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
