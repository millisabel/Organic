import { getStoryDescription } from '@/utils/storiesHelpers';
import List, { type ListProps } from '.';

export default {
  title: 'Typography/List',
  component: List,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/ui/Typography/List/List.stories.tsx',
        }),
      },
    },
  },
};

export const Template = (args: ListProps) => <List {...args} />;
Template.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  as: 'ul',
  variant: 'default',
};

const items = ['Item 1', 'Item 2', 'Item 3'];

export const ListDefault = () => <List items={items} />;
export const ListOrdered = () => <List items={items} as="ol" />;
