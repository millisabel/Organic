import Article from '.';
import type { ContentTypeComponent } from './types';

export default {
  title: 'Typography/Components/Shared/Post/Article',
  component: Article,
};

const content: ContentTypeComponent[] = [
  {
    type: 'paragraph',
    children: 'Это параграф',
  },
  {
    type: 'heading',
    children: 'Это заголовок',
    level: 2,
    variant: 'sectionTitle',
  },
  {
    type: 'list',
    items: ['Элемент 1', 'Элемент 2'],
    as: 'ul',
    variant: 'default',
  },
  {
    type: 'quote',
    children: 'Это цитата',
    variant: 'default',
    className: 'my-4',
  },
  {
    type: 'paragraph',
    children: 'Это параграф',
    variant: 'default',
    className: 'my-4',
  },
  {
    type: 'list',
    items: ['Элемент 1', 'Элемент 2'],
    as: 'ol',
    variant: 'default',
  },
];

export const Default = () => <Article content={content} className="max-w-2xl" />;
