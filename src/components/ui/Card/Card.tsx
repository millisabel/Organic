import { cn } from '@/utils/helpers';
import type { CardProps } from './types';
import { cardVariants } from './variants';

const Card = ({ children, variant, state, className, nameComponent, onClick }: CardProps) => {
  return (
    <div
      data-component={nameComponent}
      className={cn(cardVariants({ variant, state }), className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
