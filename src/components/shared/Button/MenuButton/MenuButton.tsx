import Button from '@/components/ui/Button/Button';
import MenuIcon from '@/components/shared/Icon/MenuIcon';
import { type MenuButtonProps } from '.';

const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => {
  return (
    <Button
      variant="transparent"
      size="circle"
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      type="button"
      nameComponent="MenuButton"
    >
      <MenuIcon />
    </Button>
  );
};

export default MenuButton;
