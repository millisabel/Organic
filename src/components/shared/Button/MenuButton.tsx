import { Button } from '@/components/ui/Button';
import MenuIcon from '@/components/ui/Icon/MenuIcon';

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
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      className={className}
      type="button"
      data-component="MenuButton"
    >
      <MenuIcon variant="default" size="md" />
    </Button>
  );
};

export default MenuButton;
