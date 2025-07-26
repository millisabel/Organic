import Button from '@/components/ui/Button/Button';
import React from 'react';
import TrashIcon from '@/components/shared/Icon/TrashIcon';
import type { TrashButtonProps } from './types';

const TrashButton: React.FC<TrashButtonProps> = ({ ...props }) => (
  <Button
    aria-label="Remove from cart"
    type="button"
    variant="red"
    size="square"
    nameComponent="TrashButton"
    {...props}
  >
    <TrashIcon />
  </Button>
);

export default TrashButton;
