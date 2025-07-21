import { cn } from '@/utils/helpers';

export interface CardFooterProps {
  className?: string;
  children?: React.ReactNode;
}

const cardFooterClasses = ['flex flex-col items-center justify-center gap-2'];

const CardFooter = ({ children, className }: CardFooterProps) => {
  return (
    <div data-component="CardFooter" className={cn(cardFooterClasses, className)}>
      {children}
    </div>
  );
};

export default CardFooter;
