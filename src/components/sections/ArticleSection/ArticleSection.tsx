import Section from '@/components/layout/Section/Section';
import IntroContent from '@/components/shared/Post/Intro';
import ArticleContent, { type ArticleContentProps } from '@/components/shared/Post/Article';
import type { ArticleSectionProps } from './types';

const ArticleSection = ({ post }: ArticleSectionProps) => {
  return (
    <Section id="article" dataComponent="ArticleSection">
      {post ? (
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
      ) : (
        <div className="text-center text-red-500">Post not found</div>
      )}
    </Section>
  );
};

export default ArticleSection;
