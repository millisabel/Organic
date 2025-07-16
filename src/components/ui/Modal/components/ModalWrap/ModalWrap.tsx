import { type FC, useRef } from 'react';
import { cn } from '@/utils/helpers';
import { modalVariants } from './variants';
import type { ModalWrapProps } from './types';

const ModalWrap: FC<ModalWrapProps> = ({ className, children, variant = 'default' }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(modalVariants({ variant }), className)}
      ref={modalRef}
      data-component="Modal"
    >
      {children}
    </div>
  );
};

export default ModalWrap;
