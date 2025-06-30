import { Link } from 'react-router-dom';
import Card from '../../Card';
import { cardVariants } from '../variants';
import type { ProductCardInternalProps } from './ProductCard.types';
import ProductImageBlock from './blocks/ProductImageBlock';
import ProductContentBlock from './blocks/ProductContentBlock';
import ProductActionBlock from './blocks/ProductActionBlock';
import ProductBadgeBlock from './blocks/ProductBadgeBlock';

const ProductCardCompact: React.FC<ProductCardInternalProps> = ({
  product,
  isInCart,
  isLoading,
  variant = 'product',
  mode = 'shopCompact',
  handleCategoryClick,
  handleRemove,
  handleAddToCart,
}) => {
  const { id, category, name, price, oldPrice, imageUrl, rating } = product;
  const isOutOfStock = !!product.isOutOfStock;

  return (
    <Card
      variant={variant}
      size="product"
      className={cardVariants({ variant })}
      data-component="ProductCard"
    >
      <Link to={`/shop/${id}`} className="block w-full max-w-[335px] mx-auto">
        {isOutOfStock && (
          <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-10">
            <span className="text-primary font-bold text-xl bg-white/70 px-4 py-2 rounded-lg">
              Out of Stock
            </span>
          </div>
        )}
        <ProductBadgeBlock
          product={product}
          category={category}
          handleCategoryClick={handleCategoryClick}
        />
        <ProductImageBlock imageUrl={imageUrl} name={name} />
        <ProductContentBlock name={name} price={price} oldPrice={oldPrice} rating={rating} />
      </Link>
      <ProductActionBlock
        mode={mode}
        quantity={1}
        setQuantity={() => {}}
        isInCart={isInCart}
        isLoading={isLoading}
        isOutOfStock={isOutOfStock}
        handleAddToCart={() => handleAddToCart(product, 1)}
        handleRemove={handleRemove}
      />
    </Card>
  );
};

export default ProductCardCompact;
