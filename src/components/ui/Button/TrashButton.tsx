import { Button } from '@/components/ui/Button';
import React from 'react';
import TrashIcon from '../Icon/TrashIcon';

interface TrashButtonProps {
  handleRemove: () => void;
}

const TrashButton: React.FC<TrashButtonProps> = ({ handleRemove }) => (
  <Button
    type="button"
    aria-label="Remove from cart"
    tabIndex={0}
    variant="trash"
    size="trash"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      handleRemove();
    }}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        handleRemove();
      }
    }}
    style={{ minWidth: 40, minHeight: 40 }}
  >
    <TrashIcon />
  </Button>
);

export default TrashButton;
