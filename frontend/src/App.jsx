import {Toaster} from 'sonner';
import {BrowserRouter, Routes, Route} from 'react-router';
import HonePage from './pages/HomePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
    <Toaster richColors/>
      <BrowserRouter>
      <Routes>
      <Route
        path='/'
        element={<HonePage />}
      />

      <Route
        path='*'
        element={<NotFound />}
      />
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
