import CartCountBadge, { type CartCountBadgeProps } from '.';

export default {
  title: 'Components/Badge/CartCountBadge',
  component: CartCountBadge,
  argTypes: {
    count: { control: 'number' },
  },
};

const Template = (args: CartCountBadgeProps) => <CartCountBadge {...args} />;
export const Interactive = Template.bind({});
// @ts-expect-error: Storybook adds args dynamically
Interactive.args = {
  count: 5,
};

export const CartCountBadgeDefault = () => {
  return (
    <div className="relative w-10 h-10 bg-gray-200">
      <CartCountBadge count={5} />
    </div>
  );
};
