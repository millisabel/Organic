import { useState } from 'react';

import { cn } from '../../utils/helpers';
import CartButton from '../ui/CartButton';
import Logo from '../ui/Logo';
import MenuButton from '../ui/MenuButton';
import SearchInput from '../ui/SearchInput';
import MobileMenu from './MobileMenu';
import Navigation from './Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={cn('border-b border-border')}>
      <div className={cn('container mx-auto px-4')}>
        <div className={cn('flex items-center justify-between py-6')}>
          <Logo />
          <div className="hidden lg:flex">
            <Navigation />
          </div>
          <div className="hidden items-center gap-x-8 lg:flex">
            <SearchInput />
            <CartButton />
          </div>
          <div className="lg:hidden">
            <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
