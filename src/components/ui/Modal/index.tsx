import CloseButton from '@/components/shared/Button/CloseButton';
import { cn } from '@/utils/helpers';
import { useOnClickOutside } from '@hooks/useOnClickOutside';
import { type FC, type ReactNode, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, onClose);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      data-component="Modal"
    >
      <div ref={modalRef} className={cn('relative rounded-lg bg-white p-8 shadow-xl', className)}>
        <CloseButton onClick={onClose} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
