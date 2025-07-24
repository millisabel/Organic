import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import TeamSection from '@/components/sections/TeamSection';
import CategoriesSection from '@/components/sections/CategoriesSection';

import heroImage from '@/assets/images/backgrounds/hero_about.webp';
import { features } from '@/data/featuresAboutAbout.json';

const AboutPage = () => {
  return (
    <>
      <HeroSection id="hero" variant="banner" title="About Us" backgroundImageUrl={heroImage} />
      <AboutSection
        variant="about"
        title="We do Creative Things for Success"
        subtitle="About Us"
        description={[
          "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
          " Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
        ]}
        className="bg-background"
        features={features}
        image="about_about.webp"
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
