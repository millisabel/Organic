import AboutSection from '@/components/sections/AboutSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import HeroSection from '@/components/sections/HeroSection';
import TeamSection from '@/components/sections/TeamSection';

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
          'Our journey began with a simple mission: to make organic, healthy food accessible to everyone while supporting sustainable farming practices. We believe that what we eat directly impacts our health and the health of our planet.',
          'Today, we work with over 200 certified organic farmers across the country, ensuring that every product in our store meets the highest standards of quality and sustainability. Our commitment to excellence drives everything we do.',
        ]}
        className="bg-background"
        features={features}
        image="about_about.webp"
        imageSize={{
          width: 978,
          height: 675,
        }}
      />
      <TeamSection
        title="Our Team"
        subtitle="About Us"
        description="Meet the passionate individuals behind our mission to bring you the finest organic products. Our team combines expertise in sustainable agriculture, nutrition, and customer service to provide you with an exceptional shopping experience."
        itemsDisplay={3}
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
