import { Outlet } from 'react-router-dom';
import Newsletter from '../shared/Newsletter';
import FloatingCartButton from '../ui/FloatingCartButton';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
      <FloatingCartButton />
    </div>
  );
};

export default Layout;
