import AddToCartButton from '@/components/shared/Button/AddToCartButton';
import GoToCartButton from '@/components/shared/Button/GoToCartButton';
import TrashButton from '@/components/shared/Button/TrashButton';
import Input from '@/components/ui/Form/Input';
import Label from '@/components/ui/Form/Label';
import type { ActionsBlockProps } from './types';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import { cn } from '@/utils/helpers';
import CartIcon from '@/components/shared/Icon/CartIcon';

export const ActionsBlockCompact = ({
  id,
  handleAddToCartClick,
  isOutOfStock,
  isInCart,
  isLoading,
  handleRemoveClick,
  className,
}: ActionsBlockProps) => {
  return (
    <div className={cn('flex gap-2 flex-row justify-center items-center w-full mx-2', className)}>
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
        <Button asChild variant="outline" className="flex-1 min-w-[100px] mx-auto md:mx-0">
          <Link to={`/shop/${id}`}>
            <span>buy more</span>
            <ArrowIcon className="w-5 h-5" />
          </Link>
        </Button>
      )}
      {isInCart && <GoToCartButton mode="compact" size="square" />}
      {isInCart && <TrashButton onClick={handleRemoveClick} />}
    </div>
  );
};

export const ActionsBlockDetailed = ({
  quantity,
  handleQuantityChange,
  isInCart,
  isLoading,
  isOutOfStock,
  handleAddToCartClick,
  handleRemoveClick,
}: ActionsBlockProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-end items-center md:ml-auto">
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
          className="w-full min-w-[100px] mx-auto md:mx-0"
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
