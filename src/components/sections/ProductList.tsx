import { useCartActions } from '@/hooks/useCartActions';
import { useAppSelector } from '@/store/hooks';
import { getImageUrl } from '@/utils/helpers';
import ProductCard, { type IProduct } from '../ui/Card/ProductCard';

interface IProductListProps {
  products: IProduct[];
}

const ProductList: React.FC<IProductListProps> = ({ products }) => {
  const { handleAddToCart, handleRemove } = useCartActions();
  const { items: cartItems, loadingItems } = useAppSelector((state) => state.cart);

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 justify-items-center">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={{
            ...product,
            imageUrl: getImageUrl('products', product.imageUrl),
          }}
          isInCart={cartItems.some((item) => item.id === product.id)}
          isLoading={loadingItems.includes(product.id)}
          onAddToCart={() => handleAddToCart(product)}
          onRemove={() => handleRemove(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
