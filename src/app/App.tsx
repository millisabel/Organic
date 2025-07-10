import { HashRouter, Route, Routes } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';
import BlogSinglePage from '@/pages/BlogSinglePadge';
import ContactPage from '../pages/ContactPage';
import ProjectsPage from '../pages/ProjectsPage';
import ShopPage from '../pages/ShopPage';
import ShopSinglePage from '@/pages/ShopSinglePage';
import CartPage from '../pages/CartPage';
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
          <Route path="blog/:postId" element={<BlogSinglePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
