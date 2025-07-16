import StatusBadge, { type StatusBadgeProps } from '.';

export default {
  title: 'Badge/Components/UI/StatusBadge',
  component: StatusBadge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'new', 'sale', 'inCart', 'outOfStock'],
    },
  },
};

const Template = (args: StatusBadgeProps) => <StatusBadge {...args} />;
export const Interactive = Template.bind({});
// @ts-expect-error: Storybook adds args dynamically
Interactive.args = {
  variant: 'default',
};

export const StatusBadgeDefault = () => <StatusBadge variant="default" />;
export const StatusBadgeNew = () => <StatusBadge variant="new" />;
export const StatusBadgeSale = () => <StatusBadge variant="sale" />;
export const StatusBadgeInCart = () => <StatusBadge variant="inCart" />;
export const StatusBadgeOutOfStock = () => <StatusBadge variant="outOfStock" />;
