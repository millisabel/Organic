import FloatingCartButton from '@/features/cart/components/buttons/FloatingCartButton';
import { useFloatingCartButton } from '@/hooks/useFloatingCartButton';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header';

const Layout = () => {
  const { count, price, isVisible } = useFloatingCartButton();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Outlet />
        {/* <Newsletter /> */}
      </main>
      <Footer />
      <FloatingCartButton
        count={count}
        price={price}
        isVisible={isVisible}
        className="fixed bottom-6 right-6 z-50"
      />
    </div>
  );
};

export default Layout;
