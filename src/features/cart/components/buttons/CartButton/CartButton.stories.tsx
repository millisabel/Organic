import { MemoryRouter } from 'react-router-dom';
import CartButton from './CartButton';
import { createArgTypesFromArray, getStoryDescription } from '@/utils/storiesHelpers';
import type { CartButtonProps } from './types';

const customProps = createArgTypesFromArray([
  {
    name: 'count',
    type: 'number',
    defaultValue: 0,
    control: 'number',
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    control: false,
    category: 'Parent Props',
  },
  {
    name: 'className',
    type: 'string',
    control: 'text',
    category: 'Parent Props',
  },
  {
    name: 'asChild',
    type: 'boolean',
    control: false,
    defaultValue: false,
    category: 'Parent Props',
  },
  {
    name: 'nameComponent',
    type: 'string',
    control: false,
    defaultValue: 'CartButton',
    category: 'Parent Props',
  },
]);

export default {
  title: 'Components/Button/Extended/CartButton',
  component: CartButton,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          inheritFrom: 'Button',
          source: 'src/features/cart/components/buttons/CartButton/CartButton.tsx',
        }),
      },
    },
  },
  argTypes: customProps,
  decorators: [
    (Story: React.ComponentType) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Template = (args: CartButtonProps) => <CartButton {...args} />;
Template.args = {
  count: 0,
};
