import MenuButton from '@/components/shared/Button/MenuButton';
import Logo from '@/components/ui/Logo';
import CartButton from '@/features/cart/components/buttons/CartButton';
import { useCartTotal } from '@/features/cart/hooks/useCartTotal';
import { useCallback, useState } from 'react';
import MobileMenu from './MobileMenu';
import Navigation from './Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalItems = useCartTotal();

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="relative border-b border-border">
      <div className="container mx-auto flex w-full items-center justify-between py-6">
        <Logo />
        <Navigation className="hidden lg:flex" />
        <div className="flex items-center gap-x-2">
          <CartButton count={totalItems} />
          <MenuButton isOpen={isMenuOpen} onClick={handleMenuToggle} className="lg:hidden" />
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </header>
  );
};

export default Header;
