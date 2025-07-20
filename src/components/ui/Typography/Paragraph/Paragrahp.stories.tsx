import { getStoryDescription } from '@/utils/storiesHelpers';
import Paragraph from './Paragrahp';
import type { ParagraphProps } from './types';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/ui/Typography/Paragraph/Paragrahp.stories.tsx',
        }),
      },
    },
  },
};

export const Template = (args: ParagraphProps) => <Paragraph {...args} />;
Template.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};
