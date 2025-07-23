import Newsletter from '@/components/sections/Newsletter';
import SuccessModal from '@/components/shared/Modal/SuccessModal';
import FloatingCartButton from '@/features/cart/components/buttons/FloatingCartButton';

import { useFloatingCartButton } from '@/hooks/useFloatingCartButton';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import newsletterBg from '@assets/images/backgrounds/newslatteer.webp';

const Layout = () => {
  const { count, price, isVisible } = useFloatingCartButton();
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const location = useLocation();

  // Check if current route ends with '*' (404 page)
  const isNotFoundPage = location.pathname.endsWith('*');

  const handleNewsletterSubmit = (email: string) => {
    setSubmittedEmail(email);
    setIsNewsletterModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Outlet />
        {!isNotFoundPage && (
          <Newsletter
            id="newsletter"
            title="Subscribe to our Newsletter"
            onSubmit={handleNewsletterSubmit}
            backgroundImageUrl={newsletterBg}
          />
        )}
      </main>
      <Footer />
      <FloatingCartButton
        count={count}
        price={price}
        isVisible={isVisible}
        className="fixed bottom-6 right-6 z-50"
      />
      <SuccessModal
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
        title="Thank You!"
        message="Your subscription has been confirmed"
        details={`You will now receive our newsletter at: ${submittedEmail}`}
        footerText="You can unsubscribe at any time from the newsletter footer."
      />
    </div>
  );
};

export default Layout;
