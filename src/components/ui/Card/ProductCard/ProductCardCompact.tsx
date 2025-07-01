import { Link } from 'react-router-dom';
import Card from '../../Card';
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
    <Card variant={variant} size="product" data-component="ProductCard">
      <ProductBadgeBlock
        product={product}
        category={category}
        isInCart={isInCart}
        handleCategoryClick={handleCategoryClick}
      />
      <Link to={`/shop/${id}`} className="flex-1 flex flex-col justify-end">
        <ProductImageBlock imageUrl={imageUrl} name={name} classNameImage="" classNameParent="" />
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
