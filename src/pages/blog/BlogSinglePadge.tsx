import { useParams } from 'react-router-dom';
import Section from '@/components/layout/Section/Section';
import HeroSection from '@/components/sections/HeroSection';
import ArticleContent from '@/components/shared/Post/Article';
import IntroContent from '@/components/shared/Post/Intro';
import { getImageUrl } from '@/utils/helpers';
import type { ArticleContentProps } from '@/components/shared/Post/Article/types';
import newsData from '@/data/news.json';
import BreadcrumbsSection from '@/components/sections/BreadcrumbsSection/BreadcrumbsSection';

const BlogSinglePage = () => {
  const { postId } = useParams();
  const post = newsData.find((item) => String(item.id) === postId);
  const heroImg = getImageUrl('news', post?.imageUrl ?? '');

  if (!post) {
    return <div className="text-center text-red-500">Post not found</div>;
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: post.title },
  ];

  return (
    <div className="relative">
      <BreadcrumbsSection items={breadcrumbItems} />
      <HeroSection id="hero" variant="single" backgroundImageUrl={heroImg} container={false} />
      <Section id="article">
        <div className="relative">
          <IntroContent
            post={post}
            className="lg:absolute lg:-top-40 left-0 p-0 md:p-14 lg:p-20 md:rounded-2xl lg:shadow-lg"
          />
          <ArticleContent
            content={post.content as ArticleContentProps[]}
            className="lg:pt-40 sm:px-4 md:px-14 lg:px-60"
            paragraphClassName="mb-4"
            titleClassName="mb-6"
            listClassName="my-10"
            quoteClassName="text-center"
          />
        </div>
      </Section>
    </div>
  );
};

export default BlogSinglePage;
