import CartIcon from '@/components/icons/CartIcon';
import { useAppSelector } from '@/store/hooks';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FloatingCartButton = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const headerRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();

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
    <button
      type="button"
      aria-label="Open cart"
      onClick={() => navigate('/cart')}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-primary px-6 py-4 shadow-2xl hover:bg-accent transition-colors group"
      style={{ minWidth: 64 }}
    >
      <span className="relative flex items-center justify-center">
        <CartIcon className="w-7 h-7 text-white" />
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white border-2 border-white">
          {totalCount}
        </span>
      </span>
      <span className="text-white font-bold text-lg hidden sm:inline">
        ${totalPrice.toFixed(2)}
      </span>
    </button>
  );
};

export default FloatingCartButton;
