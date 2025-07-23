import { HashRouter, Route, Routes } from 'react-router-dom';

import BlogSinglePage from '@/pages/blog/BlogSinglePadge';
import ShopSinglePage from '@/pages/shop/ShopSinglePage';
import Layout from '../components/layout/Layout';
import AboutPage from '../pages/about/AboutPage';
import BlogPage from '../pages/blog/BlogPage';
import CartPage from '../pages/cart/CartPage';
import ContactPage from '../pages/contact/ContactPage';
import HomePage from '../pages/home/HomePage';
import ShopPage from '../pages/shop/ShopPage';
import CartPersistence from '../store/CartPersistence';
import TeamPage from '@/pages/team/TeamPage';

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
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:postId" element={<BlogSinglePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="team" element={<TeamPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
