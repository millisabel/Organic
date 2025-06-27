import blogImage from '@/assets/images/backgrounds/hero_bg_page_blog.webp';
import HeroSection from '@/components/sections/HeroSection';

const BlogPage = () => {
  return <HeroSection variant="banner" title="Recent  News" bgImage={blogImage} />;
};

export default BlogPage;
