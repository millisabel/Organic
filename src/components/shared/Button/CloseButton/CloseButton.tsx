import { type FC } from 'react';
import Button from '@/components/ui/Button/Button';
import CloseIcon from '@/components/shared/Icon/CloseIcon';
import type { CloseButtonProps } from '.';

const CloseButton: FC<CloseButtonProps> = ({ onClick, ariaLabel = 'Close', ...props }) => {
  return (
    <Button
      variant="close"
      size="circle"
      onClick={onClick}
      aria-label={ariaLabel}
      nameComponent="CloseButton"
      {...props}
    >
      <CloseIcon />
    </Button>
  );
};

export default CloseButton;
