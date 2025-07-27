import Button from '@/components/ui/Button/Button';
import type { CartSummaryProps } from '.';
import { cn } from '@/utils/helpers';

const CartSummary = ({ total, className }: CartSummaryProps) => (
  <div className={cn('flex flex-col md:flex-row items-center justify-between gap-4', className)}>
    <div className="text-xl font-bold">
      Total: <span className="text-primary">${total.toFixed(2)}</span>
    </div>
    <Button className="w-full md:w-auto" disabled>
      Checkout (demo)
    </Button>
  </div>
);

export default CartSummary;
