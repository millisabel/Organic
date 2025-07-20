import BadgeButton, { type BadgeButtonProps } from '.';

export default {
  title: 'Components/Badge/Extended/BadgeButton',
  component: BadgeButton,
  argTypes: {
    text: { control: 'text' },
  },
};

const Template = (args: BadgeButtonProps) => <BadgeButton {...args} />;
export const Interactive = Template.bind({});
// @ts-expect-error: Storybook adds args dynamically
Interactive.args = {
  text: 'Category',
};

export const BadgeButtonDefault = () => (
  <BadgeButton text="Category" handleCategoryClick={() => {}} />
);
