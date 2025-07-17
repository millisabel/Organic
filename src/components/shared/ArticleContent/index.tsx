import { Paragraph, Quote, Title } from '@/components/ui/Typography';
import List from '@/components/ui/Typography/List';
import type { ArticleContentProps, ContentBlockType } from './articleContent.types';

const ArticleContent = ({ content, className }: ArticleContentProps) => (
  <div className={className} data-component="ArticleContent">
    {content.map((item: ContentBlockType, idx: number) => {
      switch (item.type) {
        case 'paragraph':
          return <Paragraph key={`p-${idx}`}>{item.text}</Paragraph>;
        case 'heading':
          return <Title key={`h-${idx}`}>{item.text}</Title>;
        case 'list':
          return <List key={`l-${idx}`} items={item.items} as={item.ordered ? 'ol' : 'ul'} />;
        case 'quote':
          return <Quote key={`q-${idx}`}>{item.text}</Quote>;
        default:
          return null;
      }
    })}
  </div>
);

export default ArticleContent;
