import type { ListProps, ParagraphProps, QuoteProps, TitleProps } from '@/components/ui/Typography';

export type ArticleContentProps =
  | (ParagraphProps & { type: 'paragraph' })
  | (TitleProps & { type: 'heading' })
  | (ListProps & { type: 'list' })
  | (QuoteProps & { type: 'quote' });

export interface ArticleProps {
  content: ArticleContentProps[];
  className?: string;
  paragraphClassName?: string;
  titleClassName?: string;
  listClassName?: string;
  quoteClassName?: string;
}
