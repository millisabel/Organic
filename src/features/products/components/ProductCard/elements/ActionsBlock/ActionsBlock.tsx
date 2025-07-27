import AddToCartButton from '@/components/shared/Button/AddToCartButton';
import BuyMoreButton from '@/components/shared/Button/BuyMoreButton';
import GoToCartButton from '@/components/shared/Button/GoToCartButton';
import TrashButton from '@/components/shared/Button/TrashButton';
import Input from '@/components/ui/Form/Input';
import Label from '@/components/ui/Form/Label';
import { cn } from '@/utils/helpers';
import type { ActionsBlockProps } from './types';

const ActionsBlock = ({
  mode = 'compact',
  id,
  quantity,
  handleQuantityChange,
  handleAddToCartClick,
  isOutOfStock,
  isInCart,
  isLoading,
  handleRemoveClick,
  className,
}: ActionsBlockProps) => {
  // Compact mode
  if (mode === 'compact') {
    return (
      <div className={cn('flex flex-row gap-2 justify-center items-center w-full mx-2', className)}>
        {!isInCart && (
          <AddToCartButton
            isInCart={isInCart}
            isLoading={isLoading}
            isOutOfStock={isOutOfStock}
            variant="outline"
            className="w-full mx-auto md:mx-0"
            onClick={handleAddToCartClick}
          />
        )}
        {isInCart && (
          <BuyMoreButton
            productId={id!}
            variant="outline"
            className="flex-1 min-w-[60px] min-h-[56px] mx-auto md:mx-0"
          />
        )}
        {isInCart && <GoToCartButton mode="compact" size="square" />}
        {isInCart && <TrashButton onClick={handleRemoveClick} />}
      </div>
    );
  }

  // Detailed mode
  return (
    <div className="flex flex-col gap-2 md:flex-row md:justify-end items-center md:ml-auto">
      <form
        name="quantity"
        className="flex flex-row justify-between md:justify-start items-center gap-4 w-full"
      >
        <Label htmlFor="quantity" className="text-lg text-primary font-bold">
          Quantity:
        </Label>
        <Input
          id="quantity"
          type="number"
          value={quantity}
          min={1}
          onChange={handleQuantityChange}
          variant="quantity"
          className="h-[56px] w-min max-w-[100px]"
        />
      </form>
      <div className="flex gap-2 flex-row justify-center items-center w-full mx-2">
        <AddToCartButton
          isInCart={isInCart}
          isLoading={isLoading}
          isOutOfStock={isOutOfStock}
          variant="default"
          className="w-full min-w-[100px] md:min-w-[200px] mx-auto md:mx-0"
          onClick={handleAddToCartClick}
          aria-label="Add to Cart"
          title="Add to Cart"
        />

        {isInCart && (
          <GoToCartButton mode="compact" size="square" aria-label="Go to Cart" title="Go to Cart" />
        )}
        {isInCart && (
          <TrashButton
            onClick={handleRemoveClick}
            aria-label="Remove from Cart"
            title="Remove from Cart"
          />
        )}
      </div>
    </div>
  );
};

export default ActionsBlock;
