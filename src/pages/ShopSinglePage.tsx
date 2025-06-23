import CartIcon from '@/components/icons/CartIcon';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { type IProduct } from '@/components/shared/ProductCard';
import ProductList from '@/components/shared/ProductList';
import Section from '@/components/shared/Section';
import { Button } from '@/components/ui/Button';
import Rating from '@/components/ui/Rating';
import productsData from '@/data/products.json';
import { getImageUrl } from '@/utils/helpers';
import React from 'react';
import { useParams } from 'react-router-dom';

const ShopSinglePage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productsData.find((p) => p.id.toString() === productId) as IProduct;

  if (!product) {
    return (
      <Section className="text-center">
        <h1 className="text-3xl font-bold">Product not found!</h1>
      </Section>
    );
  }

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
      <section
        className="py-24 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${getImageUrl('backgrounds', 'page_shop_single.webp')})` }}
      >
        <h1 className="text-5xl font-bold text-primary">Shop Single</h1>
      </section>

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
            <div className="flex items-center gap-4">
              <p className="text-xl font-bold text-primary">Quantity :</p>
              <input
                type="number"
                defaultValue={1}
                min={1}
                className="w-24 text-center border-2 border-primary rounded-xl py-4 px-2 text-xl font-bold"
              />
              <Button>
                Add To Cart <CartIcon className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Related Products" align="center">
        <ProductList products={relatedProducts} />
      </Section>
    </>
  );
};

export default ShopSinglePage;
