import CartIcon from '@/components/shared/Icon/CartIcon';
import Button from '@/components/ui/Button';
import CartCountBadge from '@/features/cart/components/items/CartCountBadge';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { FloatingCartButtonProps } from './types';
import { useScrollToElement } from '@/hooks';

const FloatingCartButton = ({ count, price, isVisible, ...props }: FloatingCartButtonProps) => {
  const { scrollToElement } = useScrollToElement({ delay: 300 });
  const handleClick = () => {
    scrollToElement('[id="cart"]');
  };
  // Track when items are added to cart for pulse animation
  const [justAdded, setJustAdded] = useState(false);
  const [prevCount, setPrevCount] = useState(count);

  // Trigger pulse animation when count increases
  useEffect(() => {
    if (count > prevCount) {
      setJustAdded(true);
      const timer = setTimeout(() => setJustAdded(false), 600);
      return () => clearTimeout(timer);
    }
    setPrevCount(count);
  }, [count, prevCount]);

  return (
    <AnimatePresence>
      {isVisible && (
        <Button
          asChild
          variant="default"
          size="ellipse"
          aria-label={`Open cart (${count} items, $${price.toFixed(2)})`}
          nameComponent="FloatingCartButton"
          className="relative w-max"
          {...props}
        >
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0, scale: justAdded ? [1, 1.05, 1] : 1 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{
              duration: justAdded ? 0.6 : 0.4,
              ease: 'easeOut',
            }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Link
              to="cart"
              className="flex items-center"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={handleClick}
            >
              <span className="relative flex items-center justify-center">
                <motion.div
                  className="absolute -top-2 -right-2"
                  key={count}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <CartCountBadge count={count} className="w-5 h-5" />
                </motion.div>
                <CartIcon size="lg" />
              </span>
              <span className="ml-2">${price.toFixed(2)}</span>
            </Link>
          </motion.div>
        </Button>
      )}
    </AnimatePresence>
  );
};

export default FloatingCartButton;
