import SpinnerIcon from '@/components/shared/Icon/SpinnerIcon';
import Button from '@/components/ui/Button';
import type { AddToCartButtonProps } from '.';

const AddToCartButton = ({ isInCart, isLoading, isOutOfStock, ...props }: AddToCartButtonProps) => {
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
      disabled={isOutOfStock}
      aria-label={buttonText}
      nameComponent="AddToCartButton"
      {...props}
    >
      {isLoading ? <SpinnerIcon /> : buttonText}
    </Button>
  );
};

export default AddToCartButton;
