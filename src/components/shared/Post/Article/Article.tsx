import { Paragraph, Quote, Title } from '@/components/ui/Typography';
import List from '@/components/ui/Typography/List';
import type { ArticleContentProps, ArticleProps } from './types';

const Article = ({
  content,
  className,
  paragraphClassName,
  titleClassName,
  listClassName,
  quoteClassName,
}: ArticleProps) => {
  if (!content || !Array.isArray(content)) {
    return (
      <div className={className} data-component="ArticleContent">
        No content available
      </div>
    );
  }
  return (
    <div className={className} data-component="ArticleContent">
      {content.map((item: ArticleContentProps, idx: number) => {
        switch (item.type) {
          case 'paragraph':
            return (
              <Paragraph key={`p-${idx}`} {...item} className={paragraphClassName}>
                {item.text}
              </Paragraph>
            );
          case 'heading':
            return (
              <Title key={`h-${idx}`} {...item} className={titleClassName}>
                {item.text}
              </Title>
            );
          case 'list':
            return <List key={`l-${idx}`} {...item} className={listClassName} />;
          case 'quote':
            return (
              <Quote key={`q-${idx}`} {...item} className={quoteClassName}>
                {item.text}
              </Quote>
            );
          default:
            if (process.env.NODE_ENV === 'development') {
              // eslint-disable-next-line no-console
              console.warn('Article content:', content);
            }
            return null;
        }
      })}
    </div>
  );
};

export default Article;
