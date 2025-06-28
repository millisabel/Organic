import { Button } from '@/components/ui/Button';
import MenuIcon from '@/components/ui/Icon/MenuIcon';
import { cn } from '@/utils/helpers';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const MenuButton = ({ isOpen, onClick, className }: MenuButtonProps) => {
  return (
    <Button
      variant="menu"
      size="round"
      className={cn('hover:translate-y-0', className)}
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      type="button"
      data-component="MenuButton"
    >
      <MenuIcon variant="menu" size="md" />
    </Button>
  );
};

export default MenuButton;
