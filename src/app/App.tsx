import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';
import CartPage from '../pages/CartPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ShopPage from '../pages/ShopPage';

import '../styles/App.css';

function App() {
  return (
    <BrowserRouter basename="/Organic">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
