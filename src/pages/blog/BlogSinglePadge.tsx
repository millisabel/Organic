import Section from '@/components/layout/Section/Section';
import HeroSection from '@/components/sections/HeroSection';
import ArticleContent from '@/components/shared/Post/Article';
import type { ContentTypeComponent } from '@/components/shared/Post/Article/types';
import IntroContent from '@/components/shared/Post/Intro';
import newsData from '@/data/news.json';
import { getImageUrl } from '@/utils/helpers';
import { useParams } from 'react-router-dom';

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
          <IntroContent
            post={post}
            className="absolute top-0 left-0 sm:p-4 md:p-14 lg:p-20 md:rounded-2xl md:shadow-lg"
          />
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
