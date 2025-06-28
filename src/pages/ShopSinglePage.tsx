import Section from '@/components/layout/sectionLayouts/Section';
import SectionHeader from '@/components/layout/sectionLayouts/SectionHeader';
import HeroSection from '@/components/sections/HeroSection';
import ProductList from '@/components/sections/ProductList';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { type IProduct } from '@/components/shared/ProductCard';
import { Button } from '@/components/ui/Button';
import CartIcon from '@/components/ui/Icon/CartIcon';
import SpinnerIcon from '@/components/ui/Icon/SpinnerIcon';
import Rating from '@/components/ui/Rating';
import productsData from '@/data/products.json';
import { addItem, startLoading, stopLoading } from '@/store/cartSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { cn, getImageUrl } from '@/utils/helpers';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShopSinglePage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useAppDispatch();
  const { items: cartItems, loadingItems } = useAppSelector((state) => state.cart);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [productId]);

  const product = productsData.find((p) => p.id.toString() === productId) as IProduct;

  if (!product) {
    return (
      <Section className="text-center">
        <h1 className="text-3xl font-bold">Product not found!</h1>
      </Section>
    );
  }

  const isInCart = cartItems.some((item) => item.id === product.id);
  const isLoading = loadingItems.includes(product.id);

  const handleAddToCart = () => {
    if (isLoading) return;

    dispatch(startLoading(product.id));
    setTimeout(() => {
      dispatch(addItem({ product, quantity }));
      dispatch(stopLoading(product.id));
    }, 1500);
  };

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: product.name },
  ];

  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <HeroSection
        variant="banner"
        title="Shop Single"
        bgImage={getImageUrl('backgrounds', 'page_shop_single.webp')}
      />

      <div className="container py-10 mx-auto">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <Section className="pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-background rounded-3xl p-8 flex items-center justify-center">
            <img
              src={getImageUrl('products', product.imageUrl)}
              alt={product.name}
              className="max-w-full h-auto drop-shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-primary">{product.name}</h2>
            <div className="my-4">
              <Rating rating={product.rating} />
            </div>
            <div className="flex items-center gap-4 mb-4">
              {product.oldPrice && (
                <p className="text-xl text-neutral-400 line-through">
                  ${product.oldPrice.toFixed(2)}
                </p>
              )}
              <p className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</p>
            </div>
            <p className="text-neutral-500 mb-8">{product.description}</p>
            <div className="flex flex-col md:flex-row items-center gap-4">
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
              <Button
                onClick={handleAddToCart}
                disabled={isLoading}
                className={cn({
                  'cursor-wait !bg-gray-200': isLoading,
                })}
              >
                {isLoading ? (
                  <SpinnerIcon />
                ) : isInCart ? (
                  <>
                    Add More <CartIcon className="w-5 h-5 ml-2" />
                  </>
                ) : (
                  <>
                    Add To Cart <CartIcon className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Related Products" />
        {relatedProducts.length > 0 ? (
          <ProductList products={relatedProducts} />
        ) : (
          <p className="text-text-light text-center">
            There are no matching products, but we plan to have them soon.
          </p>
        )}
        <div className="text-center mt-10">
          <Button asChild variant="default">
            <Link to="/shop">Go to Shop</Link>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default ShopSinglePage;
