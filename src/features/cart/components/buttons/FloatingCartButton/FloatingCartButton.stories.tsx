import CartCountBadge from '@/components/ui/Badge/CartCountBadge';
import Button from '@/components/ui/Button';
import CartIcon from '@/components/ui/Icon/CartIcon';

export default {
  title: 'Features/Cart/FloatingCartButton/VisualOnly',
  component: Button,
};

let isMobile = false;

export const VisualDesktop = () => (
  <Button
    variant="default"
    size="ellipse"
    aria-label={`Open cart 4 items)`}
    nameComponent="FloatingCartButton"
  >
    <div>
      <span className="relative flex items-center justify-center">
        <CartIcon viewBox="0 0 27 24" size="lg" />
        <CartCountBadge count={4} />
      </span>
      {!isMobile && <span className="ml-2">$200.00</span>}
    </div>
  </Button>
);

export const VisualMobile = () => (
  <Button
    variant="default"
    size="ellipse"
    aria-label={`Open cart 4 items)`}
    nameComponent="FloatingCartButton"
  >
    <div>
      <span className="relative flex items-center justify-center">
        <CartIcon viewBox="0 0 27 24" size="lg" />
        <CartCountBadge count={4} />
      </span>
      {isMobile && <span className="ml-2">$200.00</span>}
    </div>
  </Button>
);
