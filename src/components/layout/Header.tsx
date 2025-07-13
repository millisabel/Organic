import MenuButton from '@/components/ui/Button/MenuButton';
import Logo from '@/components/ui/Logo';
import CartButton from '@/features/cart/components/CartButton';
import { cn } from '@/utils/helpers';
import { useCallback, useState } from 'react';
import MobileMenu from './MobileMenu';
import Navigation from './Navigation';
import { useCartTotal } from '@/features/cart/hooks/useCartTotal';

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
    <header className={cn('relative border-b border-border')}>
      <div className={cn('container mx-auto px-4')}>
        <div className={cn('flex w-full items-center justify-between py-6')}>
          <Logo />
          <Navigation className="hidden lg:flex" />
          <div className="flex items-center gap-x-2">
            <CartButton count={totalItems} />
            <MenuButton isOpen={isMenuOpen} onClick={handleMenuToggle} className="lg:hidden" />
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </header>
  );
};

export default Header;
