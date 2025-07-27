import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import Button from '@/components/ui/Button/Button';
import { useScrollToElement } from '@/hooks';
import { Link } from 'react-router-dom';
import type { BuyMoreButtonProps } from './types';

const BuyMoreButton = ({
  variant = 'outline',
  state = 'default',
  children,
  productId,
  className,
  ...props
}: BuyMoreButtonProps) => {
  const { scrollToElement } = useScrollToElement({ delay: 300 });

  const handleClick = () => {
    scrollToElement('[id="product"]');
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
