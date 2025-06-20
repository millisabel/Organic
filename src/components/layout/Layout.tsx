import { Outlet } from 'react-router-dom';
import Footer from './Footer.tsx';
import Header from './Header.tsx';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
