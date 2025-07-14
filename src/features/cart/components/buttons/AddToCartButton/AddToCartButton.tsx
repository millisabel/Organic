import Button from '@/components/ui/Button/Button';
import SpinnerIcon from '@/components/ui/Icon/SpinnerIcon';
import type { AddToCartButtonProps } from '.';

const AddToCartButton = ({ isInCart, isLoading, isOutOfStock, onClick }: AddToCartButtonProps) => {
  // Determine button state based on conditions
  const buttonState = isLoading
    ? 'loading'
    : isOutOfStock
      ? 'disabled'
      : isInCart
        ? 'success'
        : undefined;

  const buttonText = isInCart ? 'Added to Cart' : isOutOfStock ? 'Out of Stock' : 'Add to Cart';

  return (
    <Button
      variant="outline"
      state={buttonState}
      onClick={onClick}
      disabled={isOutOfStock}
      aria-label={buttonText}
      nameComponent="AddToCartButton"
    >
      {isLoading ? <SpinnerIcon variant="spinner" /> : buttonText}
    </Button>
  );
};

export default AddToCartButton;
