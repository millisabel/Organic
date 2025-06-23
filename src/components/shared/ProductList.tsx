import { getImageUrl } from '@/utils/helpers';
import React, { useState } from 'react';
import ProductCard, { type IProduct } from './ProductCard';

interface IProductListProps {
  products: IProduct[];
}

const ProductList: React.FC<IProductListProps> = ({ products }) => {
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [loadingItems, setLoadingItems] = useState<number[]>([]);

  const handleAddToCart = (productId: string | number) => {
    if (
      typeof productId !== 'number' ||
      cartItems.includes(productId) ||
      loadingItems.includes(productId)
    ) {
      return;
    }
    setLoadingItems((prev) => [...prev, productId]);
    setTimeout(() => {
      setCartItems((prev) => [...prev, productId]);
      setLoadingItems((prev) => prev.filter((id) => id !== productId));
    }, 1500);
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 justify-items-center">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={{
            ...product,
            imageUrl: getImageUrl('products', product.imageUrl),
          }}
          isInCart={cartItems.includes(product.id as number)}
          isLoading={loadingItems.includes(product.id as number)}
          onAddToCart={() => handleAddToCart(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
