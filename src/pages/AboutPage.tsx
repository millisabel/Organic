import AboutSection from '@/components/sections/AboutSection';
import HeroSection from '@/components/sections/HeroSection';
import TeamSection from '@/components/sections/TeamSection';
import ArrowIcon from '@/components/ui/Icon/ArrowIcon';

import about_section_image from '@/assets/images/backgrounds/about_about.webp';
import heroImage from '@/assets/images/backgrounds/hero_about.webp';
import { features } from '@/data/featuresAboutAbout.json';
import CategoriesSection from '@/components/sections/CategoriesSection';

const AboutPage = () => {
  return (
    <>
      <HeroSection variant="banner" title="About Us" bgImage={heroImage} />
      <AboutSection
        image={{ src: about_section_image, alt: 'About Section Image' }}
        title="We do Creative Things for Success"
        subtitle="About Us"
        description={[
          "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
          " Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
        ]}
        button={{ text: 'Shop Now', icon: <ArrowIcon variant="arrow" size="md" /> }}
        className="bg-background"
        features={features}
      />
      <TeamSection
        title="Our Team"
        subtitle="About Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <CategoriesSection
        title="What We Offer for You"
        subtitle="About Us"
        backgroundColor="bg-primary"
      />
    </>
  );
};

export default AboutPage;
