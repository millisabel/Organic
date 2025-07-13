import Card from '../../Card';
import ProductActionBlock from './blocks/ProductActionBlock';
import ProductBadgeBlock from './blocks/ProductBadgeBlock';
import ProductContentBlock from './blocks/ProductContentBlock';
// import ProductImageBlock from './blocks/ProductImageBlock';
import type { ProductCardInternalProps } from './types';
import { useNavigate } from 'react-router-dom';

const ProductCardCompact: React.FC<ProductCardInternalProps> = ({
  data,
  isInCart,
  isLoading,
  mode = 'shopCompact',
  // imageUrl,
  handleCategoryClick,
  handleRemove,
  handleAddToCart,
  hiddenActionBlock,
  imageName,
}) => {
  const { category, name, price, oldPrice, rating } = data;
  const isOutOfStock = !!data.isOutOfStock;
  const badges = (
    <ProductBadgeBlock
      product={data}
      category={category}
      isInCart={isInCart}
      handleCategoryClick={handleCategoryClick}
    />
  );

  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/shop/${data.id}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      navigate(`/shop/${data.id}`);
    }
  };

  return (
    <Card
      variant="product"
      imgProps={{ name: imageName, folder: 'products' }}
      data-component="ProductCard"
      badges={badges}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      imgClassName="h-[300px]"
    >
      <ProductContentBlock name={name} price={price} oldPrice={oldPrice} rating={rating} />
      <ProductActionBlock
        product={data}
        mode={mode}
        quantity={1}
        setQuantity={() => {}}
        isInCart={isInCart}
        isLoading={isLoading}
        isOutOfStock={isOutOfStock}
        handleAddToCart={(e, product, quantity) => handleAddToCart(e, product, quantity)}
        handleRemove={(e) => handleRemove(e)}
        hidden={hiddenActionBlock}
      />
    </Card>
  );
};

export default ProductCardCompact;
