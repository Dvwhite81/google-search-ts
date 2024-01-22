import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdvancedSearch from './pages/AdvancedSearch/AdvancedSearch';
import ImageSearch from './pages/ImageSearch/ImageSearch';
import Search from './pages/Search/Search';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/images" element={<ImageSearch />} />
          <Route path="/advanced" element={<AdvancedSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
