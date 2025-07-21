import { getStoryDescription } from '@/utils/storiesHelpers';
import BadgeButton, { type BadgeButtonProps } from '.';

export default {
  title: 'Components/Button/Extended/BadgeButton',
  component: BadgeButton,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          inheritFrom: 'Button',
          source: 'src/components/ui/Card/ProductCard/blocks/BadgeButton/BadgeButton.tsx',
        }),
      },
    },
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Template = (args: BadgeButtonProps) => <BadgeButton {...args} />;
Template.args = {
  children: 'Template',
};
