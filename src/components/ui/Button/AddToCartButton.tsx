import { Button } from '@/components/ui/Button';
import CartIcon from '@/components/ui/Icon/CartIcon';
import CheckIcon from '@/components/ui/Icon/CheckIcon';
import SpinnerIcon from '@/components/ui/Icon/SpinnerIcon';
import React from 'react';

interface AddToCartButtonProps {
  isInCart: boolean;
  isLoading: boolean;
  isOutOfStock: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  isInCart,
  isLoading,
  isOutOfStock,
  onClick,
}) => (
  <Button
    onClick={onClick}
    disabled={isLoading || isOutOfStock}
    variant={
      isInCart
        ? 'productInCart'
        : isLoading
          ? 'productLoading'
          : isOutOfStock
            ? 'productOutOfStock'
            : 'product'
    }
    size="fullWidthButton"
    aria-label={
      isOutOfStock
        ? 'Out of Stock'
        : isInCart
          ? 'In Cart'
          : isLoading
            ? 'Adding to Cart'
            : 'Add to Cart'
    }
  >
    {isOutOfStock ? (
      'Out of Stock'
    ) : isLoading ? (
      <SpinnerIcon variant="spinner" />
    ) : isInCart ? (
      <>
        <CheckIcon className="w-5 h-5 mr-2" /> Add More
      </>
    ) : (
      <>
        <CartIcon viewBox="0 0 27 24" className="w-5 h-5 mr-2" /> Add to Cart
      </>
    )}
  </Button>
);

export default AddToCartButton;
