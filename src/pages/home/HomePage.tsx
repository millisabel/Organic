import HeroSection from '@/components/sections/HeroSection';
import BannerSection from '@/components/sections/BannerSection';

import hero_bg from '@/assets/images/backgrounds/hero_home.webp';

const HomePage = () => {
  // const isBelowLg = useIsBelowBreakpoint('lg');
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
      {/* <AboutSection
        image={{ src: about_section_image, alt: 'About Section Image' }}
        title="We Believe in Working Accredited Farmers"
        subtitle="About Us"
        description="Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
        button={{ text: 'Shop Now', icon: <ArrowIcon variant="arrow" size="md" /> }}
        className="bg-background"
        features={features}
      /> */}
      {/* <ProductSection
        title="Our Products"
        subtitle="Categories"
        button={{ text: 'Load More', icon: <ArrowIcon variant="arrow" size="md" /> }}
      /> */}
      {/* <Testimonial /> */}
      {/* <OfferSection
        title="We Offer Organic For You"
        subtitle="Offers"
        button={{
          text: 'View All Product',
          variant: 'accent',
          icon: <ArrowIcon variant="arrow" size="md" />,
        }}
        className="bg-primary"
      /> */}
      {/* <WhoWe
        bgImage={who_we_image}
        title="Econis is a Friendly Organic Store"
        subtitle="Eco Friendly"
        bgSize={isBelowLg ? '100% 100%' : '50% 100%'}
        bgPosition={isBelowLg ? 'top center' : 'top left'}
      /> */}
      {/* <GallerySection /> */}
      {/* <NewsSection
        title="Discover weekly content about organic food, & more"
        subtitle="News"
        button={{
          text: 'More News',
          icon: <ArrowIcon variant="arrow" size="md" />,
          variant: 'outline',
          to: '/blog',
        }}
        count={2}
      /> */}
    </>
  );
};

export default HomePage;
