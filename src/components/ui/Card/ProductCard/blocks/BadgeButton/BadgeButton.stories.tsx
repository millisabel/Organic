import BadgeButton, { type BadgeButtonProps } from '.';

export default {
  title: 'Components/Button/Extended/BadgeButton',
  component: BadgeButton,
  parameters: {
    docs: {
      description: {
        component: 'src/components/ui/Card/ProductCard/blocks/BadgeButton/BadgeButton.tsx',
      },
    },
  },
  argTypes: {
    text: { control: 'text' },
  },
};

const Template = (args: BadgeButtonProps) => <BadgeButton {...args} />;
Template.args = {
  text: 'Category',
};

export const BadgeButtonDefault = () => (
  <BadgeButton text="Category" handleCategoryClick={() => {}} />
);
