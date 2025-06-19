import { useState } from 'react';
import Logo from '../ui/Logo';
import Navigation from './Navigation';
import CartButton from '../ui/CartButton';
import MenuButton from '../ui/MenuButton';
import SearchButton from '../ui/SearchButton';
import Container from '../shared/Container';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchClick = () => {
    console.log('Search clicked');
  };

  return (
    <Container className="bg-white shadow-sm">
      <div className="py-6">
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
      </div>
    </Container>
  );
};

export default Header;
