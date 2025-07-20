import type { ComponentType } from 'react';
import { MemoryRouter } from 'react-router-dom';
import InfoBlock from './InfoBlock';
import { getStoryDescription } from '@/utils/storiesHelpers';
import type { InfoBlockProps } from './types';

export default {
  title: 'Shared/ContentBlocks/InfoBlock',
  component: InfoBlock,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/shared/ContentBlocks/InfoBlock/InfoBlock.stories.tsx',
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

export const Template = (args: InfoBlockProps) => <InfoBlock {...args} />;
Template.args = {
  iconSrc: 'tractor.svg',
  title: 'Title',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
};
