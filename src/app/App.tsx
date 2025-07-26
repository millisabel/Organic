import { HashRouter, Route, Routes } from 'react-router-dom';

import '../styles/App.css';

// Pages
import HomePage from '../pages/home/HomePage';
import AboutPage from '../pages/about/AboutPage';
import ShopPage from '../pages/shop/ShopPage';
import BlogPage from '../pages/blog/BlogPage';
import ContactPage from '../pages/contact/ContactPage';
import TeamPage from '../pages/team/TeamPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

// Single pages
import BlogSinglePage from '../pages/blog/BlogSinglePadge';
import ShopSinglePage from '../pages/shop/ShopSinglePage';

// Components
import Layout from '../components/layout/Layout';

// Cart
import CartPage from '../pages/cart/CartPage';
import CartPersistence from '../features/cart/CartPersistence/CartPersistence';

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
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
