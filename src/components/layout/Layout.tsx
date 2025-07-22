import Newsletter from '@/components/sections/Newsletter';
import FloatingCartButton from '@/features/cart/components/buttons/FloatingCartButton';
import { useFloatingCartButton } from '@/hooks/useFloatingCartButton';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ModalSubscribe from '../shared/Modal/ModalSubscribe';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = () => {
  const { count, price, isVisible } = useFloatingCartButton();
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleNewsletterSubmit = (email: string) => {
    setSubmittedEmail(email);
    setIsNewsletterModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Outlet />
        <Newsletter id="newsletter" onSubmit={handleNewsletterSubmit} />
      </main>
      <Footer />
      <FloatingCartButton
        count={count}
        price={price}
        isVisible={isVisible}
        className="fixed bottom-6 right-6 z-50"
      />
      <ModalSubscribe
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
        submittedEmail={submittedEmail}
      />
    </div>
  );
};

export default Layout;
