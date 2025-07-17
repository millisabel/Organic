import type { ListProps, ParagraphProps, QuoteProps, TitleProps } from '@/components/ui/Typography';

export type ContentTypeComponent =
  | (ParagraphProps & { type: 'paragraph' })
  | (TitleProps & { type: 'heading' })
  | (ListProps & { type: 'list' })
  | (QuoteProps & { type: 'quote' });

export interface ArticleProps {
  content: ContentTypeComponent[];
  className?: string;
}
