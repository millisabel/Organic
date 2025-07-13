import { Button } from '@/components/ui/Button';
import React from 'react';
import TrashIcon from '../Icon/TrashIcon';

interface TrashButtonProps {
  handleRemove: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TrashButton: React.FC<TrashButtonProps> = ({ handleRemove }) => (
  <Button
    type="button"
    aria-label="Remove from cart"
    tabIndex={0}
    variant="productTrash"
    size="roundedSquare"
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
