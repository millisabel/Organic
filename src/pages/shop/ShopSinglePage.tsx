import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/layout/Section/SectionHeader';
import UiList from '@/components/patterns/UiList';
import HeroSection from '@/components/sections/HeroSection';
import ProductCard from '@/components/shared/Card/ProductCard/ProductCard';
import Breadcrumbs from '@/components/shared/Navigation/Breadcrumbs/Breadcrumbs';
import Button from '@/components/ui/Button/Button';
import productsData from '@/data/products.json';
// import { useCartActions } from '@/hooks/useCartActions';
// import { useAppSelector } from '@/store/hooks';
import heroImage from '@/assets/images/backgrounds/hero_shop_single.webp';
// import { adaptProductData, adaptProductsData } from '@/utils/productAdapter';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ShopSinglePage: React.FC = () => {
  // const { handleAddToCart, handleRemove, handleCategoryClick } = useCartActions();
  // const { items: cartItems, loadingItems } = useAppSelector((state) => state.cart);
  const { productId } = useParams<{ productId: string }>();
  // const rawProduct = productsData.find((p) => p.id.toString() === productId);
  // const product = rawProduct ? adaptProductData(rawProduct) : null;
  // const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // setQuantity(1);
    window.scrollTo(0, 0);
  }, [productId]);

  // if (!product) {
  //   return (
  //     <Section className="text-center">
  //       <h1 className="text-3xl font-bold">Product not found!</h1>
  //     </Section>
  //   );
  // }

  // const isInCart = cartItems.some((item) => item.id === product.id);
  // const isLoading = loadingItems.includes(product.id);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    // { label: product.name },
  ];

  // const relatedProducts = adaptProductsData(productsData);
  // .filter((p) => p.category === product.category && p.id !== product.id)
  // .slice(0, 4);
  return (
    <>
      <HeroSection id="hero" variant="banner" title="Shop Single" backgroundImageUrl={heroImage} />

      <div className="container py-10 mx-auto">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* <Section className="pt-10"> */}
      {/* <ProductCard */}
      {/* // data={product}
          // cardView="detailed"
          // imageUrl={product.imageUrl}
          // product={product}
          // quantity={quantity}
          // isInCart={isInCart}
          // isLoading={isLoading}
          // onAddToCart={(product, quantity) => handleAddToCart(product, quantity)}
          // onRemove={() => handleRemove(product)}
          // onCategoryClick={(category) => handleCategoryClick(category)} */}
      {/* // setQuantity={setQuantity} */}
      {/* // /> */}
      {/* </Section> */}

      {/* <Section>
        <SectionHeader title="Related Products" />
        {relatedProducts.length > 0 ? (
          <UiList
            variant="gridCol_md_2"
            items={relatedProducts}
            renderItem={(item, idx) => <ProductCard key={idx} data={item} />}
          />
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
      </Section> */}
    </>
  );
};

export default ShopSinglePage;
