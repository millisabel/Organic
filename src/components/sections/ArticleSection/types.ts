import type { ArticleContentProps } from '@/components/shared/Post/Article';
import type { IntroData } from '@/components/shared/Post/Intro';

export interface ArticleSectionProps {
  post: IntroData & { content: ArticleContentProps[] };
}
