import ShopSinglePage from '@/pages/ShopSinglePage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';
import CartPage from '../pages/CartPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ShopPage from '../pages/ShopPage';
import CartPersistence from '../store/CartPersistence';

import '../styles/App.css';

function App() {
  return (
    <HashRouter>
      <CartPersistence />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="shop/:productId" element={<ShopSinglePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
