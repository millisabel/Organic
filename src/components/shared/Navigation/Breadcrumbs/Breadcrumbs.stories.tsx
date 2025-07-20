import { MemoryRouter } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import type { ComponentType } from 'react';
import { getStoryDescription } from '@/utils/storiesHelpers';

export default {
  title: 'Shared/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/shared/Navigation/Breadcrumbs/Breadcrumbs.stories.tsx',
        }),
      },
    },
  },
  decorators: [
    (Story: ComponentType) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const items = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'Product' },
];

export const Template = (arg: React.ComponentProps<typeof Breadcrumbs>) => <Breadcrumbs {...arg} />;
Template.args = {
  items: items,
};
