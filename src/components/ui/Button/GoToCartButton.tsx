import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import ArrowIcon from '@/components/ui/Icon/ArrowIcon';
import CartIcon from '../Icon/CartIcon';

interface GoToCartButtonProps {
  mode?: 'shopSingle' | 'shopCompact';
  variant?: 'default' | 'productInCart' | 'product';
  size?: 'fullWidthButton' | 'pillButton' | 'roundedSquare';
}

const GoToCartButton: React.FC<GoToCartButtonProps> = ({
  variant = 'productInCart',
  size = 'fullWidthButton',
  mode = 'shopCompact',
}) => {
  return (
    <Button aria-label="Go to cart" tabIndex={0} asChild variant={variant} size={size}>
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
