import { useState } from 'react';
import Container from '../shared/Container';
import CartButton from '../ui/CartButton';
import Logo from '../ui/Logo';
import MenuButton from '../ui/MenuButton';
import SearchButton from '../ui/SearchButton';
import Navigation from './Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchClick = () => {};

  return (
    <Container className="bg-white shadow-sm">
      <header className="py-6">
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
          <div className="flex items-center gap-2">
            <SearchButton onClick={handleSearchClick} />
            <CartButton itemCount={0} />
            <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
        {isMenuOpen && <Navigation isMobile />}
      </header>
    </Container>
  );
};

export default Header;
