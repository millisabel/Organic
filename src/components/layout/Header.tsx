import { useState } from 'react';
import Container from '../shared/Container';
import ArrowIcon from '../ui/ArrowIcon';
import { Button } from '../ui/Button';
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
      <div className="py-6">
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
          <div className="flex items-center gap-2">
            <SearchButton onClick={handleSearchClick} />
            <CartButton itemCount={0} />
            <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />

            <Button variant="default" size="default">
              Shop Now
            </Button>
          </div>
        </div>
        {isMenuOpen && <Navigation isMobile />}
      </div>
    </Container>
  );
};

export default Header;
