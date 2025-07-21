import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import CheckIcon from '@/components/shared/Icon/CheckIcon';
import StarIcon from '@/components/shared/Icon/StarIcon';
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

// New examples with icons
export const ListWithCheckIcons = () => (
  <List
    items={['Feature 1', 'Feature 2', 'Feature 3']}
    icon={<CheckIcon size="sm" className="text-green-500" />}
  />
);

export const ListWithStarIcons = () => (
  <List
    items={['Premium feature 1', 'Premium feature 2', 'Premium feature 3']}
    icon={<StarIcon size="sm" className="text-yellow-500" />}
  />
);

export const ListWithArrowIcons = () => (
  <List
    items={['Step 1: Choose plan', 'Step 2: Configure settings', 'Step 3: Deploy']}
    icon={<ArrowIcon variant="arrow" size="sm" className="text-blue-500" />}
  />
);

export const OrderedListWithIcons = () => (
  <List
    items={['First priority', 'Second priority', 'Third priority']}
    as="ol"
    icon={<ArrowIcon variant="arrow" size="sm" className="text-purple-500" />}
  />
);
