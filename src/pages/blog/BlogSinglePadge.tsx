import { useParams } from 'react-router-dom';
import HeroSection from '@/components/sections/HeroSection';
import { getImageUrl } from '@/utils/helpers';
import newsData from '@/data/news.json';
import BreadcrumbsSection from '@/components/sections/BreadcrumbsSection/BreadcrumbsSection';
import ArticleSection, { type ArticleSectionProps } from '@/components/sections/ArticleSection';

const BlogSinglePage = () => {
  const { postId } = useParams();
  const post = newsData.find((item) => String(item.id) === postId);
  const heroImg = getImageUrl('news', post?.imageUrl ?? '');

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: post?.title ?? '' },
  ];

  return (
    <div className="relative">
      <BreadcrumbsSection items={breadcrumbItems} />
      <HeroSection id="hero" variant="single" backgroundImageUrl={heroImg} container={false} />
      <ArticleSection post={post as unknown as ArticleSectionProps['post']} />
    </div>
  );
};

export default BlogSinglePage;
