import Section from '@/components/layout/sectionLayouts/Section';
import HeroSection from '@/components/sections/HeroSection';
import ArticleContent from '@/components/shared/Post/Article';
import newsData from '@/data/news.json';
import { getImageUrl } from '@/utils/helpers';
import { useParams } from 'react-router-dom';
import IntroContent from '@/components/shared/IntroContent';
import type { ContentTypeComponent } from '@/components/shared/Post/Article/types';

const BlogSinglePage = () => {
  const { postId } = useParams();
  const post = newsData.find((item) => String(item.id) === postId);
  const heroImg = getImageUrl('news', post?.imageUrl ?? '');

  if (!post) {
    return <div className="text-center text-red-500">Post not found</div>;
  }

  return (
    <>
      <HeroSection variant="single" bgImage={heroImg} />
      <Section>
        <div className="relative">
          <IntroContent post={post} className="sm:p-4 md:p-14 lg:p-20" />
          <ArticleContent
            content={post.content as ContentTypeComponent[]}
            className="md:pt-64 sm:px-4 md:px-14 lg:px-60"
          />
        </div>
      </Section>
    </>
  );
};

export default BlogSinglePage;
