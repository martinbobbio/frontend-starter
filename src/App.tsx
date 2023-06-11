// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import { Detail, Home, NotFound } from '@/views';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
