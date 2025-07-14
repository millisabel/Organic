import { Input } from '@/components/ui/Input';
import AddToCartButton from '@/features/cart/components/buttons/AddToCartButton';
import GoToCartButton from '@/features/cart/components/buttons/GoToCartButton';
import TrashButton from '@/features/cart/components/buttons/TrashButton';
import type { ProductActionBlockProps } from '../types';

const ProductActionBlock: React.FC<ProductActionBlockProps> = ({
  product,
  isInCart,
  isLoading,
  isOutOfStock,
  mode = 'shopCompact',
  quantity = 1,
  setQuantity,
  handleAddToCart,
  handleRemove,
  hidden = false,
}) => {
  return (
    <div
      className={`px-5 pb-5 flex items-center gap-2 flex-row ${mode === 'shopSingle' ? 'flex-col md:flex-row items-start' : ''} ${hidden ? 'hidden' : 'flex'}`}
    >
      {mode === 'shopSingle' && (
        <div className="flex items-center gap-4">
          <p className="text-xl font-bold text-primary shrink-0">Quantity :</p>
          <Input
            type="number"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
            disabled={isLoading}
            variant="quantity"
            inputSize="quantity"
          />
        </div>
      )}
      {mode === 'shopSingle' && (
        <AddToCartButton
          isInCart={isInCart}
          isLoading={isLoading}
          isOutOfStock={!!isOutOfStock}
          onClick={(e) => handleAddToCart(e, product, quantity)}
        />
      )}
      {mode !== 'shopSingle' && !isInCart && (
        <AddToCartButton
          isInCart={isInCart}
          isLoading={isLoading}
          isOutOfStock={!!isOutOfStock}
          onClick={(e) => handleAddToCart(e, product, quantity)}
        />
      )}
      {mode !== 'shopSingle' && isInCart && <GoToCartButton />}
      <div className={`flex items-center gap-2 justify-end w-auto self-end`}>
        {isInCart && (
          <TrashButton handleRemove={(e: React.MouseEvent<HTMLButtonElement>) => handleRemove(e)} />
        )}
        {mode === 'shopSingle' && isInCart && (
          <GoToCartButton mode={mode} variant="product" size="roundedSquare" />
        )}
      </div>
    </div>
  );
};

export default ProductActionBlock;
