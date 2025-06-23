import hero_bg_page_home from '@/assets/images/backgrounds/hero_bg_page_home.webp';
import ArrowIcon from '@/components/icons/ArrowIcon';
import Hero from '@/components/shared/Hero';
import Newsletter from '@/components/shared/Newsletter';
import { type IProduct } from '@/components/shared/ProductCard';
import ProductList from '@/components/shared/ProductList';
import Section from '@/components/shared/Section';
import { Button } from '@/components/ui/Button';
import productsData from '@/data/products.json';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const width = useWindowWidth();
  const productsToShowCount = width < 1024 ? 4 : 8;
  const availableProducts = productsData.filter((p) => !p.isOutOfStock);
  const productsToDisplay = availableProducts.slice(0, productsToShowCount);

  return (
    <>
      <Hero
        variant="home"
        subtitle="100% Natural Food"
        title="Choose the best healthier way of life"
        backgroundImage={hero_bg_page_home}
      />
      <Section subtitle="Categories" title="Our Products" align="center" className="text-center">
        <ProductList products={productsToDisplay as IProduct[]} />
        <Button asChild className="mt-10">
          <Link to="/shop">
            Load More <ArrowIcon />
          </Link>
        </Button>
      </Section>
      <Section className="!p-0">
        <Newsletter />
      </Section>
    </>
  );
};

export default HomePage;
