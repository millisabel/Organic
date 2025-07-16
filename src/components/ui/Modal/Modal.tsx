import CloseButton from '@/components/shared/Button/CloseButton/CloseButton';
import { useOnClickOutside } from '@hooks/useOnClickOutside';
import type { FC } from 'react';
import { useRef } from 'react';
import ModalBody from './components/ModalBody/ModalBody';
import { ModalWrap } from './components/ModalWrap';
import type { ModalProps } from './types';

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  variant = 'default',
  bodyVariant = 'default',
  showCloseButton = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalRef, onClose);

  if (!isOpen) return null;

  return (
    <ModalWrap ref={modalRef} variant={variant} className={className}>
      <ModalBody variant={bodyVariant}>
        {children}
        {showCloseButton && <CloseButton onClick={onClose} />}
      </ModalBody>
    </ModalWrap>
  );
};

export default Modal;
