import { Outlet } from 'react-router-dom';
// import Newsletter from '../sections/Newsletter';
// import FloatingCartButton from '../ui/Button/FloatingCartButton';
// import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Outlet />
        {/* <Newsletter /> */}
      </main>
      {/* <Footer /> */}
      {/* <FloatingCartButton /> */}
    </div>
  );
};

export default Layout;
