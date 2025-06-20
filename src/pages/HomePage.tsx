import heroImage from '@/assets/images/backgrounds/hero_bg_page_home.webp';
import Hero from '@/components/shared/Hero';

const HomePage = () => {
  return (
    <Hero
      variant="home"
      title="Choose the best healthier way of life"
      subtitle="100% Natural Food"
      backgroundImage={heroImage}
    />
  );
};

export default HomePage;
