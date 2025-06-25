import { Button } from '@/components/ui/Button';
import CloseIcon from '@/components/icons/CloseIcon';

interface RemoveButtonProps {
  onRemove: () => void;
}

const RemoveButton = ({ onRemove }: RemoveButtonProps) => (
  <Button variant="destructive" size="icon-lg" aria-label="Remove item" onClick={onRemove}>
    <CloseIcon />
  </Button>
);

export default RemoveButton;
