import type { ProductCardInternalProps } from './ProductCard.types';
import ProductImageBlock from './blocks/ProductImageBlock';
import ProductActionBlock from './blocks/ProductActionBlock';
import ProductContentBlock from './blocks/ProductContentBlock';
import ProductBadgeBlock from './blocks/ProductBadgeBlock';

const ProductCardDetailed: React.FC<ProductCardInternalProps> = ({
  product,
  isInCart,
  isLoading,
  imageUrl,
  quantity = 1,
  mode = 'shopSingle',
  handleCategoryClick,
  handleRemove,
  handleAddToCart,
  setQuantity,
}) => {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="relative flex flex-col items-center justify-center">
        <ProductImageBlock
          imageUrl={imageUrl}
          name={product.name}
          classNameParent="bg-background rounded-3xl p-8"
          classNameImage="max-w-full h-auto drop-shadow-xl"
        />
      </div>

      <div className="flex flex-col justify-between">
        <ProductBadgeBlock
          view="detailed"
          product={product}
          category={product.category}
          handleCategoryClick={handleCategoryClick}
          isInCart={isInCart}
        />
        <ProductContentBlock
          name={product.name}
          price={product.price}
          oldPrice={product.oldPrice}
          rating={product.rating}
          description={product.description}
          mode={mode}
        />
        <ProductActionBlock
          isInCart={isInCart}
          isLoading={isLoading}
          isOutOfStock={!!product.isOutOfStock}
          quantity={quantity}
          mode={mode}
          product={product}
          handleAddToCart={(product, quantity) => handleAddToCart(product, quantity)}
          handleRemove={() => handleRemove()}
          setQuantity={setQuantity || (() => {})}
        />
      </div>
    </div>
  );
};

export default ProductCardDetailed;
