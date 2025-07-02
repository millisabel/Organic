import about_section_image from '@/assets/images/backgrounds/about_home.webp';
import hero_bg_page_home from '@/assets/images/backgrounds/hero_home.webp';
import AboutSection from '@/components/sections/AboutSection';
import BannerSection from '@/components/sections/BannerSection';
import HeroSection from '@/components/sections/HeroSection';
import ProductSection from '@/components/sections/ProductSection';
import ArrowIcon from '@/components/ui/Icon/ArrowIcon';
import { features } from '@/data/featuresAboutHome.json';

const HomePage = () => {
  return (
    <>
      <HeroSection
        variant="home"
        subtitle="100% Natural Food"
        title="Choose the best healthier way of life"
        bgImage={hero_bg_page_home}
        button={{ text: 'Explore Now', icon: <ArrowIcon variant="arrow" size="md" /> }}
      />
      <AboutSection
        image={{ src: about_section_image, alt: 'About Section Image' }}
        title="We Believe in Working Accredited Farmers"
        subtitle="About Us"
        description="Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
        button={{ text: 'Shop Now', icon: <ArrowIcon variant="arrow" size="md" /> }}
        className="bg-background"
        features={features}
      />
      <BannerSection />
      <ProductSection
        title="Our Products"
        subtitle="Categories"
        button={{ text: 'Load More', icon: <ArrowIcon variant="arrow" size="md" /> }}
      />
    </>
  );
};

export default HomePage;
