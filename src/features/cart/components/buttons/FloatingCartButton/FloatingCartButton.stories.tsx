import CartIcon from '@/components/shared/Icon/CartIcon';
import { CartCountBadge } from '@/components/ui/Badge/CartCountBadge';
import Button from '@/components/ui/Button';

export default {
  title: 'Button/Features/Cart/Buttons/FloatingCartButton',
  component: Button,
};

let isMobile = false;

export const FloatingCartButtonVisualDesktop = () => (
  <Button
    variant="default"
    size="ellipse"
    aria-label={`Open cart 4 items)`}
    nameComponent="FloatingCartButton"
    className="relative"
  >
    <div className="flex flex-row items-center justify-center gap-2">
      <CartIcon size="lg" />
      <CartCountBadge count={4} />
      {!isMobile && <span className="ml-2">$200.00</span>}
    </div>
  </Button>
);

export const FloatingCartButtonVisualMobile = () => (
  <Button
    variant="default"
    size="ellipse"
    aria-label={`Open cart 4 items)`}
    nameComponent="FloatingCartButton"
    className="relative"
  >
    <div className=" flex flex-row items-center justify-center gap-2">
      <CartIcon size="lg" />
      <CartCountBadge count={4} />
      {isMobile && <span className="ml-2">$200.00</span>}
    </div>
  </Button>
);
