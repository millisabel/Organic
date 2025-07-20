import Button from '@/components/ui/Button/Button';
import MenuIcon from '@/components/shared/Icon/MenuIcon';
import { type MenuButtonProps } from '.';

const MenuButton = ({ isOpen, ...props }: MenuButtonProps) => {
  return (
    <Button
      variant="transparent"
      size="circle"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      nameComponent="MenuButton"
      {...props}
    >
      <MenuIcon />
    </Button>
  );
};

export default MenuButton;
