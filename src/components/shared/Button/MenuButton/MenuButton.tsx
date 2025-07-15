import Button from '@/components/ui/Button/Button';
import MenuIcon from '@/components/shared/Icon/MenuIcon';
import { type MenuButtonProps } from '.';

const MenuButton = ({ isOpen, onClick, className }: MenuButtonProps) => {
  return (
    <Button
      variant="transparent"
      size="circle"
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      className={className}
      type="button"
      nameComponent="MenuButton"
    >
      <MenuIcon />
    </Button>
  );
};

export default MenuButton;
