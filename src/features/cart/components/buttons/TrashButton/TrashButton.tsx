import Button from '@/components/ui/Button/Button';
import React from 'react';
import TrashIcon from '../../../../../components/ui/Icon/TrashIcon';
import type { TrashButtonProps } from './types';

const TrashButton: React.FC<TrashButtonProps> = ({ handleRemove }) => (
  <Button
    type="button"
    aria-label="Remove from cart"
    tabIndex={0}
    variant="trash"
    size="square"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      handleRemove(e as React.MouseEvent<HTMLButtonElement>);
    }}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        handleRemove(e as unknown as React.MouseEvent<HTMLButtonElement>);
      }
    }}
    data-component="TrashButton"
  >
    <TrashIcon />
  </Button>
);

export default TrashButton;
