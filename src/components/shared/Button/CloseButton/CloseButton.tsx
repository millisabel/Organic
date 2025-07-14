import { type FC } from 'react';
import Button from '@/components/ui/Button/Button';
import CloseIcon from '@/components/ui/Icon/CloseIcon';
import { cn } from '@/utils/helpers';
import type { CloseButtonProps } from '.';

const CloseButton: FC<CloseButtonProps> = ({ onClick, className = '', ariaLabel = 'Close' }) => {
  return (
    <Button
      variant="close"
      size="circle"
      onClick={onClick}
      className={cn('absolute top-4 right-4', className)}
      aria-label={ariaLabel}
      nameComponent="CloseButton"
    >
      <CloseIcon />
    </Button>
  );
};

export default CloseButton;
