import HeaderContent from '../HeaderContent';
import ListContent from '../ListContent';
import ParagraphContent from '../ParagrahpContent';
import QuoteContent from '../QuoteContent';
import type { ArticleContentProps, ContentBlockType } from './articleContent.types';

const ArticleContent = ({ content, className }: ArticleContentProps) => (
  <div className={className} data-component="ArticleContent">
    {content.map((item: ContentBlockType, idx: number) => {
      switch (item.type) {
        case 'paragraph':
          return <ParagraphContent key={`p-${idx}`} text={item.text} />;
        case 'heading':
          return <HeaderContent key={`h-${idx}`} text={item.text} level={item.level} />;
        case 'list':
          return <ListContent key={`l-${idx}`} items={item.items} ordered={item.ordered} />;
        case 'quote':
          return <QuoteContent key={`q-${idx}`} text={item.text} border="rounded" />;
        default:
          return null;
      }
    })}
  </div>
);

export default ArticleContent;
