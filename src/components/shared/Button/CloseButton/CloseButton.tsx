import { type FC } from 'react';
import Button from '@/components/ui/Button/Button';
import CloseIcon from '@/components/shared/Icon/CloseIcon';
import type { CloseButtonProps } from '.';

const CloseButton: FC<CloseButtonProps> = ({ ...props }) => {
  return (
    <Button variant="close" size="circle" aria-label="Close" nameComponent="CloseButton" {...props}>
      <CloseIcon />
    </Button>
  );
};

export default CloseButton;
