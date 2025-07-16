import { Rating, type RatingProps } from '.';

export default {
  title: 'Other/Components/UI/Rating',
  component: Rating,
  argTypes: {
    rating: { control: 'number' },
  },
};

const Template = (args: RatingProps) => <Rating {...args} />;
export const Interactive = Template.bind({});
// @ts-expect-error: Storybook adds args dynamically
Interactive.args = {
  rating: 4,
};
