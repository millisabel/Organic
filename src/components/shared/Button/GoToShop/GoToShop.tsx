import Button from '@/components/ui/Button/Button';
import { useScrollToElement } from '@/hooks';
import { Link, useNavigate } from 'react-router-dom';
import type { GoToShopProps } from '.';
import ArrowIcon from '../../Icon/ArrowIcon';

const GoToShop = ({
  variant = 'default',
  state = 'default',
  children,
  isArrow = true,
  ...props
}: GoToShopProps) => {
  const { scrollToElement } = useScrollToElement({ delay: 100 });
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shop`);
    scrollToElement('[data-component="ShopSection"]');
  };

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
      <Link to="/shop" onClick={handleClick} className="flex items-center gap-2">
        {(children && children) || 'Shop Now'}
        {isArrow && <ArrowIcon size="md" variant="arrow" />}
      </Link>
    </Button>
  );
};

export default GoToShop;
