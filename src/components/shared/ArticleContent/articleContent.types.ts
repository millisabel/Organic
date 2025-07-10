import type { HeadingBlock, ListBlock, ParagraphBlock, QuoteBlock } from '@/types/news.types';

export type ContentBlockType = ParagraphBlock | HeadingBlock | ListBlock | QuoteBlock;

export interface ArticleContentProps {
  content: ContentBlockType[];
  className?: string;
}
