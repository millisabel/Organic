import Button from '@/components/ui/Button/Button';
import { useSectionWithScroll } from '@/hooks';
import { Link } from 'react-router-dom';
import type { GoToShopProps } from '.';
import ArrowIcon from '../../Icon/ArrowIcon';

const GoToShop = ({
  variant = 'default',
  state = 'default',
  children,
  isArrow = true,
  onShopClick,
  ...props
}: GoToShopProps) => {
  const { sectionRef, scrollToTop } = useSectionWithScroll(null);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onShopClick) {
      onShopClick();
    }

    setTimeout(() => {
      const shopSection = document.querySelector('[data-component="ShopSection"]') as HTMLElement;
      if (shopSection) {
        sectionRef.current = shopSection;
        scrollToTop();
      }
    }, 100);
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
