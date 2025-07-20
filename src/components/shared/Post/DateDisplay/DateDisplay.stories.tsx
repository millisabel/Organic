import { getStoryDescription } from '@/utils/storiesHelpers';
import DateDisplay from './DateDisplay';

export default {
  title: 'Shared/Post/DateDisplay',
  component: DateDisplay,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/shared/Post/DateDisplay/DateDisplay.stories.tsx',
        }),
      },
    },
  },
  argTypes: {
    date: { control: 'date' },
    format: { control: 'select', options: ['short', 'long'] },
  },
};

export const Template = (arg: React.ComponentProps<typeof DateDisplay>) => <DateDisplay {...arg} />;
Template.args = {
  date: new Date(),
};
