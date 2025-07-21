import { cn } from '@/utils/helpers';
import type { CardProps } from '../types';

const cardHeaderClasses = ['flex flex-col'];

const CardHeader = ({ children, className }: CardProps) => {
  return (
    <div data-component="CardHeader" className={cn(cardHeaderClasses, className)}>
      {children}
    </div>
  );
};

export default CardHeader;
