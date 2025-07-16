import { cn } from '@/utils/helpers';
import { modalBodyVariants } from './variants';
import type { ModalBodyProps } from './types';

const ModalBody = ({ children, className, variant = 'default' }: ModalBodyProps) => {
  return <div className={cn(modalBodyVariants({ variant }), className)}>{children}</div>;
};

export default ModalBody;
