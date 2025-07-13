import Card from '../../Card';
import ProductActionBlock from './blocks/ProductActionBlock';
import ProductBadgeBlock from './blocks/ProductBadgeBlock';
import ProductContentBlock from './blocks/ProductContentBlock';
// import ProductImageBlock from './blocks/ProductImageBlock';
import type { ProductCardInternalProps } from './types';
import { useNavigate } from 'react-router-dom';

const ProductCardCompact: React.FC<ProductCardInternalProps> = ({
  product,
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
  const { category, name, price, oldPrice, rating } = product;
  const isOutOfStock = !!product.isOutOfStock;
  const badges = (
    <ProductBadgeBlock
      product={product}
      category={category}
      isInCart={isInCart}
      handleCategoryClick={handleCategoryClick}
    />
  );

  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/shop/${product.id}`);
  };

  // const handleKeyDown = (e) => {
  //   if (e.key === 'Enter' || e.key === ' ') {
  //     navigate(`/shop/${product.id}`);
  //   }
  // };

  return (
    <Card
      variant="product"
      imgProps={{ name: imageName, folder: 'products' }}
      data-component="ProductCard"
      badges={badges}
      onClick={handleCardClick}
      // onKeyDown={handleKeyDown}
    >
      {/* <ProductBadgeBlock
          product={product}
          category={category}
          isInCart={isInCart}
          handleCategoryClick={handleCategoryClick}
        /> */}
      {/* <ProductImageBlock imageUrl={imageUrl} name={name} classNameImage="" classNameParent="" /> */}
      <div className="flex-1 flex flex-col justify-end">
        <ProductContentBlock name={name} price={price} oldPrice={oldPrice} rating={rating} />
      </div>
      <ProductActionBlock
        product={product}
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
