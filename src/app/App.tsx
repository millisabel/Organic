import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

import '../styles/App.css';

const basename = import.meta.env.VITE_BASENAME || undefined;

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="shop" element={<div>Shop Page (Coming Soon)</div>} />
          <Route path="projects" element={<div>Projects Page (Coming Soon)</div>} />
          <Route path="news" element={<div>News Page (Coming Soon)</div>} />
          <Route path="cart" element={<div>Cart Page (Coming Soon)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
