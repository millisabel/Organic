import { useState } from 'react';
import { Link } from 'react-router-dom';

import { cn } from '../../utils/helpers';
import CartButton from '../ui/CartButton';
import Logo from '../ui/Logo';
import MenuButton from '../ui/MenuButton';
import SearchInput from '../ui/SearchInput';
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
            <Link to="/cart">
              <CartButton />
            </Link>
          </div>
          <div className="lg:hidden">
            <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
        {isMenuOpen && (
          <div className="py-4 lg:hidden">
            <Navigation isMobile />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
