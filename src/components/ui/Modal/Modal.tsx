import CloseButton from '@/components/shared/Button/CloseButton/CloseButton';
import { useOnClickOutside } from '@hooks/useOnClickOutside';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import ModalBody from './components/ModalBody/ModalBody';
import ModalWrap from './components/ModalWrap/ModalWrap';
import type { ModalProps } from './types';

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  variant = 'default',
  bodyVariant = 'default',
  showCloseButton = true,
  title,
  message,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useOnClickOutside(modalRef, onClose);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      previousActiveElement.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      if (!isOpen && previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalWrap ref={modalRef} variant={variant} className={className} data-component="Modal">
      <ModalBody variant={bodyVariant}>
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'modal-title' : undefined}
          aria-describedby={message ? 'modal-description' : undefined}
          tabIndex={-1}
          className="relative w-full h-full"
        >
          {children}
          {showCloseButton && (
            <CloseButton
              onClick={onClose}
              className="absolute top-2 right-2"
              aria-label="Close modal"
            />
          )}
        </div>
      </ModalBody>
    </ModalWrap>
  );
};

export default Modal;
