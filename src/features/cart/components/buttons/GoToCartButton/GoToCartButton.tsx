import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import CartIcon from '@/components/shared/Icon/CartIcon';
import Button from '@/components/ui/Button/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import type { GoToCartButtonProps } from '.';

const GoToCartButton: React.FC<GoToCartButtonProps> = ({ mode = 'shopCompact', ...props }) => {
  return (
    <Button
      aria-label="Go to cart"
      tabIndex={0}
      asChild
      variant="outline"
      state="success"
      nameComponent="GoToCartButton"
      {...props}
    >
      <Link
        to="/cart"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <>
          {mode === 'shopSingle' && <CartIcon />}
          {mode === 'shopCompact' && (
            <>
              <span className="ml-2">Go to Cart</span>
              <ArrowIcon className="w-5 h-5" />
            </>
          )}
        </>
      </Link>
    </Button>
  );
};

export default GoToCartButton;
