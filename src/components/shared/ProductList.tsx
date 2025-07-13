import { useCartActions } from '@/hooks/useCartActions';
import { useAppSelector } from '@/store/hooks';
import { getImageUrl } from '@/utils/helpers';
import ProductCard from '../ui/Card/ProductCard';
import type { IProduct } from '../ui/Card/ProductCard/types';

interface IProductListProps {
  products: IProduct[];
  hiddenActionBlock?: boolean;
}

const ProductList: React.FC<IProductListProps> = ({ products, hiddenActionBlock = false }) => {
  const { handleAddToCart, handleRemove, handleCategoryClick } = useCartActions();
  const { items: cartItems, loadingItems } = useAppSelector((state) => state.cart);

  return (
    <div
      data-component="product-list"
      className="grid grid-cols-[repeat(auto-fill,minmax(275px,1fr))] gap-5 justify-items-center"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          view="compact"
          imageUrl={getImageUrl('products', product.imageUrl)}
          isInCart={cartItems.some((item) => item.id === product.id)}
          isLoading={loadingItems.includes(product.id)}
          onAddToCart={() => handleAddToCart(product)}
          onRemove={() => handleRemove(product)}
          onCategoryClick={(category) => handleCategoryClick(category)}
          hiddenActionBlock={hiddenActionBlock}
        />
      ))}
    </div>
  );
};

export default ProductList;
