import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import CartIcon from '@/components/shared/Icon/CartIcon';
import Button from '@/components/ui/Button/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import type { GoToCartButtonProps } from '.';
import { useScrollToElement } from '@/hooks';

const GoToCartButton: React.FC<GoToCartButtonProps> = ({
  mode = 'default',
  variant = 'outline',
  state = 'success',
  children,
  ...props
}) => {
  const { scrollToElement } = useScrollToElement({ delay: 300 });
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    scrollToElement('[id="cart"]');
  };

  return (
    <Button
      aria-label="Go to cart"
      tabIndex={0}
      asChild
      variant={variant}
      state={state}
      nameComponent="GoToCartButton"
      title="Go to cart"
      {...props}
    >
      <Link to="/cart" onClick={handleClick}>
        <>
          {mode === 'compact' && <CartIcon />}
          {mode === 'default' && (
            <>
              <span className="ml-2">{children}</span>
              <ArrowIcon className="w-5 h-5" />
            </>
          )}
        </>
      </Link>
    </Button>
  );
};

export default GoToCartButton;
