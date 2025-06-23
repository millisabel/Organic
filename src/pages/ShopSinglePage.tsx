import CartIcon from '@/components/icons/CartIcon';
import CheckIcon from '@/components/icons/CheckIcon';
import SpinnerIcon from '@/components/icons/SpinnerIcon';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import Hero from '@/components/shared/Hero';
import { type IProduct } from '@/components/shared/ProductCard';
import ProductList from '@/components/shared/ProductList';
import Section from '@/components/shared/Section';
import { Button } from '@/components/ui/Button';
import Rating from '@/components/ui/Rating';
import productsData from '@/data/products.json';
import { addItem, startLoading, stopLoading } from '@/store/cartSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { cn, getImageUrl } from '@/utils/helpers';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
      <Hero
        variant="banner"
        title="Shop Single"
        backgroundImage={getImageUrl('backgrounds', 'page_shop_single.webp')}
        backgroundPosition="left"
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
            <p className="text-neutral-500 mb-8">
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-4">
                <p className="text-xl font-bold text-primary shrink-0">Quantity :</p>
                <input
                  type="number"
                  value={quantity}
                  min={1}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
                  className="w-24 text-center border-2 border-primary rounded-xl py-4 px-2 text-xl font-bold"
                  disabled={isInCart || isLoading}
                />
              </div>
              <Button
                onClick={handleAddToCart}
                disabled={isInCart || isLoading}
                className={cn({
                  'cursor-default !bg-green-100 !text-green-700': isInCart,
                  'cursor-wait !bg-gray-200': isLoading,
                })}
              >
                {isLoading ? (
                  <SpinnerIcon />
                ) : isInCart ? (
                  <>
                    <CheckIcon className="w-5 h-5 mr-2" /> In Cart
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

      <Section title="Related Products" align="center">
        {relatedProducts.length > 0 ? (
          <ProductList products={relatedProducts} />
        ) : (
          <p className="text-text-light text-center">
            There are no matching products, but we plan to have them soon.
          </p>
        )}
        <div className="text-center mt-10">
          <Button asChild variant="default">
            <a href="/shop">Go to Shop</a>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default ShopSinglePage;
