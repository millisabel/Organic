import { Paragraph, Quote, Title } from '@/components/ui/Typography';
import List from '@/components/ui/Typography/List';
import type { ArticleProps, ContentTypeComponent } from './types';

const Article = ({ content, className }: ArticleProps) => {
  if (!content || !Array.isArray(content)) {
    return (
      <div className={className} data-component="ArticleContent">
        No content available
      </div>
    );
  }

  return (
    <div className={className} data-component="ArticleContent">
      {content.map((item: ContentTypeComponent, idx: number) => {
        switch (item.type) {
          case 'paragraph':
            return (
              <Paragraph key={`p-${idx}`} {...item}>
                {item.children}
              </Paragraph>
            );
          case 'heading':
            return (
              <Title key={`h-${idx}`} {...item}>
                {item.children}
              </Title>
            );
          case 'list':
            return <List key={`l-${idx}`} {...item} />;
          case 'quote':
            return (
              <Quote key={`q-${idx}`} {...item}>
                {item.children}
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
