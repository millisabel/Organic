import { cn } from '@/utils/helpers';
import type { CartCountBadgeProps } from '.';

const badgeBaseClasses = [
  'flex items-center justify-center',
  'absolute -top-2 -right-2 z-100',
  'h-7 w-7 ',
  'rounded-full',
  'bg-green-600',
  'text-white text-[10px] text-center uppercase',
  'border-2 border-white',
].join(' ');

const CartCountBadge = ({ count = 0, className }: CartCountBadgeProps) => {
  return (
    <span className={cn(badgeBaseClasses, className)} data-component="CartCountBadge">
      {count}
    </span>
  );
};

export default CartCountBadge;
