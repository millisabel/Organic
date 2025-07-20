import type { ComponentType } from 'react';
import { MemoryRouter } from 'react-router-dom';
import NavLink from './NavLink';
import { getStoryDescription } from '@/utils/storiesHelpers';

export default {
  title: 'Shared/Navigation/NavLink',
  component: NavLink,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/shared/Navigation/NavLink/NavLink.stories.tsx',
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

export const Template = (arg: React.ComponentProps<typeof NavLink>) => <NavLink {...arg} />;
Template.args = {
  to: '/',
  children: 'NavLink',
};
