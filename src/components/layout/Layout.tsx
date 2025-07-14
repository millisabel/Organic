import { Outlet } from 'react-router-dom';
import FloatingCartButton from '@/features/cart/components/buttons/FloatingCartButton';
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
      <div className="w-full h-[200vh]"></div>

      <FloatingCartButton className="fixed bottom-6 right-6 z-50" />
    </div>
  );
};

export default Layout;
