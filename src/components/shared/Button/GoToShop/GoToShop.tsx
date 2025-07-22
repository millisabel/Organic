import Button from '@/components/ui/Button/Button';
import { Link } from 'react-router-dom';
import ArrowIcon from '../../Icon/ArrowIcon';
import type { GoToShopProps } from '.';

const GoToShop = ({
  variant = 'default',
  state = 'default',
  children,
  isArrow = true,
  ...props
}: GoToShopProps) => {
  return (
    <Button
      aria-label="Go to shop"
      tabIndex={0}
      asChild={!isArrow}
      variant={variant}
      state={state}
      nameComponent="GoToShop"
      {...props}
    >
      <Link
        to="/shop"
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex items-center gap-2"
      >
        {(children && children) || 'Shop Now'}
        {isArrow && <ArrowIcon size="md" variant="arrow" />}
      </Link>
    </Button>
  );
};

export default GoToShop;
