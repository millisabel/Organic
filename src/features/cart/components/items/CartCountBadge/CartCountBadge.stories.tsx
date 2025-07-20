import { createArgTypesFromArray, getStoryDescription } from '@/utils/storiesHelpers';
import CartCountBadge, { type CartCountBadgeProps } from '.';

const customProps = createArgTypesFromArray([
  {
    name: 'count',
    control: 'number',
    type: 'number',
    defaultValue: 0,
  },
]);

export default {
  title: 'Components/Badge/Extended/CartCountBadge',
  component: CartCountBadge,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          inheritFrom: 'Badge',
          source: 'src/features/cart/components/items/CartCountBadge/CartCountBadge.tsx',
        }),
      },
    },
  },
  argTypes: customProps,
};

export const Template = (args: CartCountBadgeProps) => <CartCountBadge {...args} />;
Template.args = {
  count: 5,
};

export const Default = () => <CartCountBadge count={0} />;
export const SmallNumber = () => <CartCountBadge count={3} />;
export const LargeNumber = () => <CartCountBadge count={99} />;
export const WithCustomClass = () => <CartCountBadge count={5} className="bg-red-500" />;
