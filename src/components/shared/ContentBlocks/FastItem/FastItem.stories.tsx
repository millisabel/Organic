import { getStoryDescription } from '@/utils/storiesHelpers';
import FastItem from './FastItem';
import type { FastItemProps } from './types';

export default {
  title: 'Shared/ContentBlocks/FastItem',
  component: FastItem,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/shared/ContentBlocks/FastItem/FastItem.stories.tsx',
        }),
      },
    },
  },
  argTypes: {
    value: { control: 'text' },
    label: { control: 'text' },
  },
};

export const Template = (args: FastItemProps) => <FastItem {...args} />;
Template.args = {
  value: '100',
  label: 'Label',
};
