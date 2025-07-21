import FloatingCartButton from '@/features/cart/components/buttons/FloatingCartButton';
import { useFloatingCartButton } from '@/hooks/useFloatingCartButton';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header';
import Newsletter from '@/components/sections/Newsletter';
import Modal from '@/components/ui/Modal';
import { useState } from 'react';

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
      <Modal isOpen={isNewsletterModalOpen} onClose={() => setIsNewsletterModalOpen(false)}>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary">Thank You!</h3>
          <p className="mt-4 text-text">
            You will now receive our newsletter at
            <br />
            <strong className="text-primary">{submittedEmail}</strong>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Layout;
