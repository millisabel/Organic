import { getStoryDescription } from '@/utils/storiesHelpers';
import Quote from './Quote';
import type { QuoteProps } from './types';

export default {
  title: 'Typography/Quote',
  component: Quote,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/ui/Typography/Quote/Quote.stories.tsx',
        }),
      },
    },
  },
};

export const Template = (args: QuoteProps) => <Quote {...args} />;
Template.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};
