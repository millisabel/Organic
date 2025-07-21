import { cn } from '@/utils/helpers';
import type { CardProps } from '../types';

const cardContentClasses = ['flex flex-col justify-center items-center gap-2'];

const CardContent = ({ children, className }: CardProps) => {
  return (
    <div data-component="CardContent" className={cn(cardContentClasses, className)}>
      {children}
    </div>
  );
};

export default CardContent;
