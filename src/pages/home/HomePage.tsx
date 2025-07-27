import AboutSection from '@/components/sections/AboutSection';
import BannerSection from '@/components/sections/BannerSection';
import GallerySection from '@/components/sections/GallerySection';
import HeroSection from '@/components/sections/HeroSection';
import NewsSection from '@/components/sections/NewsSection';
import OfferSection from '@/components/sections/OfferSection';
import ProductSection from '@/components/sections/ProductSection';
import Testimonial from '@/components/sections/Testimonial';
import WhoWe from '@/components/sections/WhoWeSection/WhoWeSection';

import { useIsBelowBreakpoint } from '@/hooks/useIsBelowBreakpoint';

import type { GalleryCardData } from '@/components/shared/Card/GalleryCard/types';
import type { NewsCardData } from '@/components/shared/Card/NewsCard/types';
import type { ArticleContentProps } from '@/components/shared/Post/Article/types';

import factsTestimonial from '@/data/factsTestimonial.json';
import { features } from '@/data/featuresAboutHome.json';
import galleryData from '@/data/gallery.json';
import newsData from '@/data/news.json';
import productsData from '@/data/products.json';
import reviews from '@/data/reviews.json';
import whoWeDescription from '@/data/whoWeDescription.json';

import hero_bg from '@/assets/images/backgrounds/hero_home.webp';
import testimonial_bg from '@/assets/images/backgrounds/testimonial_home.webp';
import who_we_image from '@/assets/images/backgrounds/who_we_home.webp';
import type { ProductCardData } from '@/features/products/model';

const HomePage = () => {
  const isBelowLg = useIsBelowBreakpoint('lg');
  const isBelowXl = useIsBelowBreakpoint('xl');
  const filteredProducts = productsData.filter((product) => product.isOutOfStock !== true);
  return (
    <>
      <HeroSection
        id="hero"
        variant="home"
        subtitle="100% Natural Food"
        title="Choose the best healthier way of life"
        backgroundImageUrl={hero_bg}
      />
      <BannerSection id="banner" />
      <AboutSection
        id="about"
        title="We Believe in Working Accredited Farmers"
        subtitle="About Us"
        description="We partner with certified organic farmers who share our commitment to sustainable agriculture and environmental stewardship. Our direct relationships with farmers ensure fair compensation and support for eco-friendly farming practices that benefit both people and the planet."
        className="bg-background"
        features={features}
        image="about_home.webp"
      />
      <ProductSection
        title="Our Products"
        subtitle="Categories"
        products={filteredProducts as unknown as ProductCardData[]}
        itemsDisplay={isBelowLg ? 6 : isBelowXl ? 9 : 8}
      />
      <Testimonial
        id="testimonial"
        title="What Our Customer Saying?"
        subtitle="Testimonial"
        backgroundImageUrl={testimonial_bg}
        paddingY="py-[160px]"
        reviews={reviews}
        facts={factsTestimonial}
      />
      <OfferSection
        id="offer"
        title="We Offer Organic For You"
        subtitle="Offers"
        products={filteredProducts as unknown as ProductCardData[]}
        className="bg-primary"
        itemsDisplay={isBelowLg ? 2 : isBelowXl ? 3 : 4}
      />
      <WhoWe
        id="who-we"
        title="Econis is a Friendly Organic Store"
        subtitle="Eco Friendly"
        backgroundImageUrl={who_we_image}
        backgroundSize={isBelowLg ? '100% 100%' : '50% 100%'}
        backgroundPosition={isBelowLg ? 'top center' : 'top left'}
        paddingY="py-[160px]"
        description={whoWeDescription as ArticleContentProps[]}
      />
      <GallerySection data={galleryData.items as GalleryCardData[]} />
      <NewsSection
        id="news"
        title="Discover weekly content about organic food, & more"
        subtitle="News"
        itemsDisplay={2}
        isButton={true}
        data={newsData as NewsCardData[]}
        isSearch={false}
      />
    </>
  );
};

export default HomePage;
