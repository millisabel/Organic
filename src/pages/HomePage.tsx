import Section from '@/components/layout/sectionLayouts/Section';
import SectionHeader from '@/components/layout/sectionLayouts/SectionHeader';
import { AboutSection } from '@/components/sections/AboutSection';
import HeroSection from '@/components/sections/HeroSection';
import ProductList from '@/components/sections/ProductList';
import { Button } from '@/components/ui/Button';
import { type IProduct } from '@/components/ui/Card/ProductCard/ProductCard.types';
import ArrowIcon from '@/components/ui/Icon/ArrowIcon';
import { features } from '@/data/featuresAboutHome.json';
import productsData from '@/data/products.json';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import { Link } from 'react-router-dom';

import about_section_image from '@/assets/images/backgrounds/about_home.webp';
import hero_bg_page_home from '@/assets/images/backgrounds/hero_home.webp';
import { PAGE_VARIANT } from '@/constants/pageVariant';

const HomePage = () => {
  const pageVariant = PAGE_VARIANT.DEFAULT;
  const width = useWindowWidth();
  const productsToShowCount = width < 1024 ? 4 : 8;
  const availableProducts = productsData.filter((p) => !p.isOutOfStock);
  const productsToDisplay = availableProducts.slice(0, productsToShowCount);

  return (
    <>
      <HeroSection
        variant="home"
        subtitle="100% Natural Food"
        title="Choose the best healthier way of life"
        bgImage={hero_bg_page_home}
      />
      <AboutSection
        image={{ src: about_section_image, alt: 'About Section Image' }}
        title="We Believe in Working Accredited Farmers"
        subtitle="About Us"
        description="Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
        button={{ text: 'Shop Now', icon: <ArrowIcon variant="arrow" size="md" /> }}
        className="bg-background"
        features={features}
        pageVariant={pageVariant}
      />
      <Section>
        <SectionHeader title="Our Products" subtitle="Categories" />
        <ProductList products={productsToDisplay as IProduct[]} />
        <Button asChild className="mt-10">
          <Link to="/shop">
            Load More <ArrowIcon variant="arrow" size="md" />
          </Link>
        </Button>
      </Section>
    </>
  );
};

export default HomePage;
