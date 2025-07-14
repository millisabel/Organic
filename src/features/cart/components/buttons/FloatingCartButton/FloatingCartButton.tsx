import CartCountBadge from '@/components/ui/Badge/CartCountBadge';
import Button from '@/components/ui/Button/Button';
import CartIcon from '@/components/ui/Icon/CartIcon';
import { useElementVisibility } from '@/hooks/useElementVisibility';
import { useIsBelowBreakpoint } from '@/hooks/useIsBelowBreakpoint';
import { useAppSelector } from '@/store/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingCartButton = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Use new hooks for better code organization
  const headerVisible = useElementVisibility({ selector: 'header' });
  const isMobile = useIsBelowBreakpoint('sm');

  // Track when items are added to cart for pulse animation
  const [justAdded, setJustAdded] = useState(false);
  const [prevCount, setPrevCount] = useState(totalCount);

  // Trigger pulse animation when count increases
  useEffect(() => {
    if (totalCount > prevCount) {
      setJustAdded(true);
      const timer = setTimeout(() => setJustAdded(false), 600);
      return () => clearTimeout(timer);
    }
    setPrevCount(totalCount);
  }, [totalCount, prevCount]);

  const shouldShow = totalCount > 0 && !headerVisible;

  return (
    <AnimatePresence>
      {shouldShow && (
        <Button
          asChild
          variant="default"
          size="ellipse"
          aria-label={`Open cart (${totalCount} items, $${totalPrice.toFixed(2)})`}
          nameComponent="FloatingCartButton"
        >
          <motion.a
            href="/cart"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0, scale: justAdded ? [1, 1.05, 1] : 1 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{
              duration: justAdded ? 0.6 : 0.4,
              ease: 'easeOut',
            }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <span className="relative flex items-center justify-center">
              <CartIcon viewBox="0 0 27 24" size="lg" />
              <motion.div
                key={totalCount}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <CartCountBadge count={totalCount} />
              </motion.div>
            </span>
            {!isMobile && <span className="ml-2">${totalPrice.toFixed(2)}</span>}
          </motion.a>
        </Button>
      )}
    </AnimatePresence>
  );
};

export default FloatingCartButton;
