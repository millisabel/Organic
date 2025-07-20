import { getStoryDescription } from '@/utils/storiesHelpers';
import Rating, { type RatingProps } from '.';

export default {
  title: 'Components/Rating/UI',
  component: Rating,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/ui/Rating/Rating.stories.tsx',
        }),
      },
    },
  },
  argTypes: {
    rating: { control: 'number' },
  },
};

export const Template = (args: RatingProps) => <Rating {...args} />;
Template.args = {
  rating: 4,
};
