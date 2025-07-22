import type { SectionProps } from '@/components/layout/Section/types';
import type { ArticleContentProps } from '@/components/shared/Post/Article/types';

export interface WhoWeProps extends SectionProps {
  description?: ArticleContentProps[];
}
