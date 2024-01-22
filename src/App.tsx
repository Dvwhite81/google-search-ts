import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdvancedSearch from './pages/AdvancedSearch/AdvancedSearch';
import ImageSearch from './pages/ImageSearch/ImageSearch';
import Search from './pages/Search/Search';
import './App.css';
import { useState } from 'react';

function App() {
  const [url, setUrl] = useState('https://www.google.com/search');
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/images' element={<ImageSearch />} />
          <Route path='/advanced' element={<AdvancedSearch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
