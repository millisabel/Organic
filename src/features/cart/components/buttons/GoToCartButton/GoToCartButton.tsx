import Button from '@/components/ui/Button/Button';
import ArrowIcon from '@/components/ui/Icon/ArrowIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '@/components/ui/Icon/CartIcon';
import type { GoToCartButtonProps } from '.';

const GoToCartButton: React.FC<GoToCartButtonProps> = ({ mode = 'shopCompact' }) => {
  return (
    <Button aria-label="Go to cart" tabIndex={0} asChild variant="outline" state="success">
      <Link
        to="/cart"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <>
          {mode === 'shopSingle' && (
            <CartIcon viewBox="0 0 27 24" className="w-5 h-5 mr-2" variant="default" />
          )}
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
