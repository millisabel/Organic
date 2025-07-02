import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { cn } from '@/utils/helpers';
import MobileMenu from './MobileMenu';
import Navigation from './Navigation';
import Logo from '@/components/ui/Logo';
import { Search } from '@/components/shared/Search';
import CartButton from '@/components/ui/Button/CartButton';
import MenuButton from '@/components/ui/Button/MenuButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const navigate = useNavigate();
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    navigate(`/shop?search=${encodeURIComponent(value)}`);
  };

  return (
    <header className={cn('relative border-b border-border')}>
      <div className={cn('container mx-auto px-4')}>
        <div className={cn('flex w-full items-center justify-between py-6')}>
          <div className={isSearchOpen ? 'hidden md:block' : ''}>
            <Logo />
          </div>
          {!isSearchOpen && (
            <div className="hidden lg:flex">
              <Navigation />
            </div>
          )}
          <div className="flex items-center gap-x-2">
            <Search
              isOpen={isSearchOpen}
              onOpen={() => setIsSearchOpen(true)}
              onClose={() => setIsSearchOpen(false)}
              value={searchValue}
              onChange={handleSearchChange}
              handleSearch={() => {}}
            />
            <div className={isSearchOpen ? 'hidden md:block' : ''}>
              <CartButton count={totalItems} />
            </div>
            <div className={`${isSearchOpen ? 'hidden md:block' : ''} flex items-center lg:hidden`}>
              <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
