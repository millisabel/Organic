import Button from '@/components/ui/Button/Button';
import type { CartQuantityButtonsProps } from './types';

const CartQuantityButtons = ({ quantity, onDecrease, onIncrease }: CartQuantityButtonsProps) => (
  <div className="flex items-center gap-2">
    <Button
      variant="outline"
      size="circle"
      aria-label="Decrease quantity"
      disabled={quantity <= 1}
      onClick={onDecrease}
    >
      −
    </Button>
    <span className="w-8 text-center font-semibold">{quantity}</span>
    <Button variant="outline" size="circle" aria-label="Increase quantity" onClick={onIncrease}>
      +
    </Button>
  </div>
);

export default CartQuantityButtons;
