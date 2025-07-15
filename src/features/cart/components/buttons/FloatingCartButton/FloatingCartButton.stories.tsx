import CartIcon from '@/components/shared/Icon/CartIcon';
import CartCountBadge from '@/components/ui/Badge/CartCountBadge';
import Button from '@/components/ui/Button';

export default {
  title: 'Features/Cart/FloatingCartButton/VisualOnly',
  component: Button,
};

let isMobile = false;

export const FloatingCartButtonVisualDesktop = () => (
  <Button
    variant="default"
    size="ellipse"
    aria-label={`Open cart 4 items)`}
    nameComponent="FloatingCartButton"
  >
    <div className="flex flex-row items-center justify-center gap-2">
      <span className="relative">
        <CartIcon size="lg" />
        <CartCountBadge count={4} />
      </span>
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
  >
    <div className="flex flex-row items-center justify-center gap-2">
      <span className="relative">
        <CartIcon size="lg" />
        <CartCountBadge count={4} />
      </span>
      {isMobile && <span className="ml-2">$200.00</span>}
    </div>
  </Button>
);
