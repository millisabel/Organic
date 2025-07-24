import { cn } from '@/utils/helpers';
import type { CardProps } from './types';
import { cardVariants } from './variants';

const Card = ({ children, variant, state, className, nameComponent }: CardProps) => {
  return (
    <div data-component={nameComponent} className={cn(cardVariants({ variant, state }), className)}>
      {children}
    </div>
  );
};

export default Card;
