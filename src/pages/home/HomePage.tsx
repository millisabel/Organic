import AboutSection from '@/components/sections/AboutSection';
import BannerSection from '@/components/sections/BannerSection';
import HeroSection from '@/components/sections/HeroSection';
import Testimonial from '@/components/sections/Testimonial';
import WhoWe from '@/components/sections/WhoWe';
import GallerySection from '@/components/sections/GallerySection';
import NewsSection from '@/components/sections/NewsSection';

import { useIsBelowBreakpoint } from '@/hooks/useIsBelowBreakpoint';

import type { ArticleContentProps } from '@/components/shared/Post/Article/types';
import type { GalleryCardData } from '@/components/shared/Card/GalleryCard/types';
import type { NewsCardData } from '@/components/shared/Card/NewsCard/types';

import factsTestimonial from '@/data/factsTestimonial.json';
import { features } from '@/data/featuresAboutHome.json';
import reviews from '@/data/reviews.json';
import whoWeDescription from '@/data/whoWeDescription.json';
import galleryData from '@/data/gallery.json';
import newsData from '@/data/news.json';

import hero_bg from '@/assets/images/backgrounds/hero_home.webp';
import testimonial_bg from '@/assets/images/backgrounds/testimonial_home.webp';
import who_we_image from '@/assets/images/backgrounds/who_we_home.webp';

const HomePage = () => {
  const isBelowLg = useIsBelowBreakpoint('lg');
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
        description="Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
        className="bg-background"
        features={features}
        image="about_home.webp"
      />
      {/* <ProductSection
        title="Our Products"
        subtitle="Categories"
        button={{ text: 'Load More', icon: <ArrowIcon variant="arrow" size="md" /> }}
      /> */}
      <Testimonial
        id="testimonial"
        title="What Our Customer Saying?"
        subtitle="Testimonial"
        backgroundImageUrl={testimonial_bg}
        paddingY="py-[160px]"
        reviews={reviews}
        facts={factsTestimonial}
      />
      {/* <OfferSection
        title="We Offer Organic For You"
        subtitle="Offers"
        // button={{
        //   text: 'View All Product',
        //   variant: 'accent',
        //   icon: <ArrowIcon variant="arrow" size="md" />,
        // }}
        className="bg-primary"
      /> */}
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
        data={newsData as NewsCardData[]}
      />
    </>
  );
};

export default HomePage;
