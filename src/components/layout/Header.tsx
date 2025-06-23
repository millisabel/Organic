import CartButton from '@/components/ui/CartButton';
import Logo from '@/components/ui/Logo';
import MenuButton from '@/components/ui/MenuButton';
import SearchButton from '@/components/ui/SearchButton';
import SearchInput from '@/components/ui/SearchInput';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { useAppSelector } from '@/store/hooks';
import { cn } from '@/utils/helpers';
import { useEffect, useRef, useState } from 'react';
import MobileMenu from './MobileMenu';
import Navigation from './Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // States for desktop and mobile search
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const desktopSearchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  useOnClickOutside(desktopSearchRef, () => setIsDesktopSearchOpen(false));
  useOnClickOutside(mobileSearchRef, () => setIsMobileSearchOpen(false));

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDesktopSearchOpen(false);
        setIsMobileSearchOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header className={cn('border-b border-border')}>
      <div className={cn('container mx-auto px-4')}>
        <div className={cn('flex items-center justify-between py-6')}>
          {/* On mobile, search input replaces the whole header */}
          {isMobileSearchOpen && (
            <div className="w-full lg:hidden">
              <SearchInput ref={mobileSearchRef} className="w-full" />
            </div>
          )}

          {/* Regular header content, hidden on mobile when search is open */}
          <div
            className={cn('flex w-full items-center justify-between', {
              'hidden lg:flex': isMobileSearchOpen,
            })}
          >
            <Logo />

            {/* Desktop Navigation or Search */}
            <div className="hidden lg:flex">{!isDesktopSearchOpen && <Navigation />}</div>

            {/* Right side icons */}
            <div className="flex items-center gap-x-2 lg:gap-x-5">
              {/* Desktop: Search Input or Button */}
              <div className="hidden lg:block">
                {isDesktopSearchOpen ? (
                  <SearchInput ref={desktopSearchRef} />
                ) : (
                  <SearchButton onClick={() => setIsDesktopSearchOpen(true)} />
                )}
              </div>

              <div className="relative">
                <CartButton />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
                    {totalItems}
                  </span>
                )}
              </div>

              {/* Desktop Menu (only when search is open) */}
              {isDesktopSearchOpen && (
                <div className="hidden lg:block">
                  <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
              )}

              {/* Mobile Icons */}
              <div className="flex items-center gap-x-2 lg:hidden">
                <SearchButton onClick={() => setIsMobileSearchOpen(true)} />
                <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
