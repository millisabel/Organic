import { Button } from '@/components/ui/Button';
import CloseIcon from '@/components/ui/Icon/CloseIcon';

interface RemoveButtonProps {
  onRemove: () => void;
}

const RemoveButton = ({ onRemove }: RemoveButtonProps) => (
  <Button variant="destructive" size="round" aria-label="Remove item" onClick={onRemove}>
    <CloseIcon />
  </Button>
);

export default RemoveButton;
