import { getStoryDescription } from '@/utils/storiesHelpers';
import Article from '.';
import type { ArticleContentProps } from './types';

export default {
  title: 'Shared/Post/Article',
  component: Article,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/shared/Post/Article/Article.stories.tsx',
        }),
      },
    },
  },
};

const content: ArticleContentProps[] = [
  {
    type: 'paragraph',
    children: 'Es ist ein Paragraph',
    className: 'my-4 text-center',
  },
  {
    type: 'heading',
    children: 'Es ist ein Heading',
    level: 2,
    variant: 'sectionTitle',
    className: 'my-4',
  },
  {
    type: 'list',
    items: ['Element 1', 'Element 2'],
    as: 'ul',
    variant: 'default',
    className: 'my-4',
  },
  {
    type: 'quote',
    children: 'Es ist ein Zitat',
    variant: 'default',
    className: 'my-4',
  },
  {
    type: 'paragraph',
    children: 'Es ist ein Paragraph',
    variant: 'default',
    className: 'my-4',
  },
  {
    type: 'list',
    items: ['Element 1', 'Element 2'],
    as: 'ol',
    variant: 'default',
  },
];

export const Default = () => <Article content={content} className="max-w-2xl" />;
