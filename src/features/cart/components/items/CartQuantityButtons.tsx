import Button from '@/components/ui/Button/Button';

interface Props {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

const CartQuantityButtons = ({ quantity, onDecrease, onIncrease }: Props) => (
  <div className="flex items-center gap-2">
    <Button
      variant="outline"
      aria-label="Decrease quantity"
      disabled={quantity <= 1}
      onClick={onDecrease}
    >
      −
    </Button>
    <span className="w-8 text-center font-semibold">{quantity}</span>
    <Button variant="outline" aria-label="Increase quantity" onClick={onIncrease}>
      +
    </Button>
  </div>
);

export default CartQuantityButtons;
