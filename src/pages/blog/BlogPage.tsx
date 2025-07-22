import HeroSection from '@/components/sections/HeroSection';
import blogImage from '@/assets/images/backgrounds/hero_blog.webp';
// import NewsSection from '@/components/sections/NewsSection';

const BlogPage = () => {
  return (
    <>
      <HeroSection id="hero" variant="banner" title="Recent  News" backgroundImageUrl={blogImage} />
      {/* <NewsSection /> */}
    </>
  );
};

export default BlogPage;
