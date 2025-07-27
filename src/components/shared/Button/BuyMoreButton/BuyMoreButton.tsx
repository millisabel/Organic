import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import Button from '@/components/ui/Button/Button';
import { useScrollToSection } from '@/hooks';
import { Link } from 'react-router-dom';
import type { BuyMoreButtonProps } from './types';

const BuyMoreButton = ({
  variant = 'outline',
  state = 'default',
  children,
  productId,
  onBuyMoreClick,
  className,
  ...props
}: BuyMoreButtonProps) => {
  const { scrollToSection } = useScrollToSection();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (onBuyMoreClick) {
      onBuyMoreClick();
    }

    scrollToSection('product');
  };

  return (
    <Button
      asChild
      variant={variant}
      state={state}
      nameComponent="BuyMoreButton"
      className={className}
      {...props}
    >
      <Link to={`/shop/${productId}`} onClick={handleClick} className="flex items-center gap-2">
        {children || (
          <>
            <span>buy more</span>
            <ArrowIcon className="w-5 h-5" />
          </>
        )}
      </Link>
    </Button>
  );
};

export default BuyMoreButton;
