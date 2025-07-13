import ProductActionBlock from './blocks/ProductActionBlock';
import ProductBadgeBlock from './blocks/ProductBadgeBlock';
import ProductContentBlock from './blocks/ProductContentBlock';
// import ProductImageBlock from './blocks/ProductImageBlock';
import type { ProductCardInternalProps } from './types';
import Card from '@/components/ui/Card';

const ProductCardDetailed: React.FC<ProductCardInternalProps> = ({
  product,
  isInCart,
  isLoading,
  // imageUrl,
  quantity = 1,
  mode = 'shopSingle',
  handleCategoryClick,
  handleRemove,
  handleAddToCart,
  setQuantity,
  imageName,
}) => {
  const badges = (
    <ProductBadgeBlock
      view="detailed"
      product={product}
      category={product.category}
      handleCategoryClick={handleCategoryClick}
      isInCart={isInCart}
    />
  );
  return (
    <Card
      className="relative grid grid-cols-1 md:grid-cols-2 gap-10"
      variant="product"
      imgProps={{ name: imageName, folder: 'products' }}
      badges={badges}
    >
      {/* <div className="relative flex flex-col items-center justify-center">
        <ProductImageBlock
          imageUrl={imageUrl}
          name={product.name}
          classNameParent="bg-background rounded-3xl p-8"
          classNameImage="max-w-full h-auto drop-shadow-xl"
        />
      </div> */}

      <div className="flex flex-col justify-between">
        {/* <ProductBadgeBlock
          view="detailed"
          product={product}
          category={product.category}
          handleCategoryClick={handleCategoryClick}
          isInCart={isInCart}
        /> */}
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
          handleAddToCart={(e, product, quantity) => handleAddToCart(e, product, quantity)}
          handleRemove={(e) => handleRemove(e)}
          setQuantity={setQuantity || (() => {})}
        />
      </div>
    </Card>
  );
};

export default ProductCardDetailed;
