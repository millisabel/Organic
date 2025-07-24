import HeroSection from '@/components/sections/HeroSection';
import blogImage from '@/assets/images/backgrounds/hero_blog.webp';
import NewsSection from '@/components/sections/NewsSection';
import type { NewsCardData } from '@/components/shared/Card/NewsCard/types';
import newsData from '@/data/news.json';

const BlogPage = () => {
  return (
    <>
      <HeroSection id="hero" variant="banner" title="Recent  News" backgroundImageUrl={blogImage} />
      <NewsSection id="news" data={newsData as NewsCardData[]} isButton={false} itemsDisplay={4} />
    </>
  );
};

export default BlogPage;
