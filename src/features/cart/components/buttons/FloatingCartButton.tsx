import CartIcon from '@/components/ui/Icon/CartIcon';
import { Button } from '@/components/ui/Button';
import { useAppSelector } from '@/store/hooks';
import { useEffect, useRef, useState } from 'react';
import CartCountBadge from '../../../components/ui/Badge/CartCountBadge';
import { Link } from 'react-router-dom';

const FloatingCartButton = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    headerRef.current = document.querySelector('header');
    if (!headerRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );
    observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  if (totalCount === 0 || headerVisible) return null;

  return (
    <Button
      variant="floatingCart"
      size="pillButton"
      aria-label="Open cart"
      data-component="FloatingCartButton"
      asChild
    >
      <Link to="/cart">
        <span className="relative flex items-center justify-center">
          <CartIcon viewBox="0 0 27 24" size="lg" />
          <CartCountBadge count={totalCount} />
        </span>
        <span className="hidden sm:inline">${totalPrice.toFixed(2)}</span>
      </Link>
    </Button>
  );
};

export default FloatingCartButton;
