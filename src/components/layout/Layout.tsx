import { Outlet } from 'react-router-dom';
import Newsletter from '../shared/Newsletter';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Layout;
