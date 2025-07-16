import HeaderContent from '../HeaderContent';
import ListContent from '../ListContent';
import type { ArticleContentProps, ContentBlockType } from './articleContent.types';
import { Paragraph, Quote } from '@/components/ui/Typography';

const ArticleContent = ({ content, className }: ArticleContentProps) => (
  <div className={className} data-component="ArticleContent">
    {content.map((item: ContentBlockType, idx: number) => {
      switch (item.type) {
        case 'paragraph':
          return <Paragraph key={`p-${idx}`} text={item.text} />;
        case 'heading':
          return <HeaderContent key={`h-${idx}`} text={item.text} level={item.level} />;
        case 'list':
          return <ListContent key={`l-${idx}`} items={item.items} ordered={item.ordered} />;
        case 'quote':
          return <Quote key={`q-${idx}`} text={item.text} variant="default" />;
        default:
          return null;
      }
    })}
  </div>
);

export default ArticleContent;
