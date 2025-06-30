import AddToCartButton from '@/components/ui/Button/AddToCartButton';
import TrashButton from '@/components/ui/Button/TrashButton';
import type { ProductActionBlockProps } from '../ProductCard.types';

const ProductActionBlock: React.FC<ProductActionBlockProps> = ({
  isInCart,
  isLoading,
  isOutOfStock,
  mode = 'shopCompact',
  quantity = 1,
  setQuantity,
  handleAddToCart,
  handleRemove,
}) => {
  return (
    <div className="px-5 pb-5 flex items-center gap-2">
      {mode === 'shopSingle' && (
        <div className="flex items-center gap-4">
          <p className="text-xl font-bold text-primary shrink-0">Quantity :</p>
          <input
            type="number"
            value={quantity}
            min={1}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
            className="w-24 text-center border-2 border-primary rounded-xl py-4 px-2 text-xl font-bold"
            disabled={isLoading}
          />
        </div>
      )}
      <AddToCartButton
        isInCart={isInCart}
        isLoading={isLoading}
        isOutOfStock={!!isOutOfStock}
        onClick={() => handleAddToCart()}
      />
      {isInCart && <TrashButton handleRemove={handleRemove} />}
    </div>
  );
};

export default ProductActionBlock;
