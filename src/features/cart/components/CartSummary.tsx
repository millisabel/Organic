import Button from '@/components/ui/Button/Button';

interface CartSummaryProps {
  total: number;
}

const CartSummary = ({ total }: CartSummaryProps) => (
  <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-4">
    <div className="text-xl font-bold">
      Total: <span className="text-primary">${total.toFixed(2)}</span>
    </div>
    <Button className="w-full md:w-auto" disabled>
      Checkout (demo)
    </Button>
  </div>
);

export default CartSummary;
