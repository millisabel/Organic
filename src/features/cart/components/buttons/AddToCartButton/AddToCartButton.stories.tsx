import { createArgTypesFromArray, getStoryDescription } from '@/utils/storiesHelpers';
import AddToCartButton from './AddToCartButton';
import type { AddToCartButtonProps } from './types';

const customProps = createArgTypesFromArray([
  {
    name: 'isInCart',
    type: 'boolean',
    defaultValue: 'false',
    control: 'boolean',
  },
  {
    name: 'isLoading',
    type: 'boolean',
    defaultValue: 'false',
    control: 'boolean',
  },
  {
    name: 'isOutOfStock',
    type: 'boolean',
    defaultValue: 'false',
    control: 'boolean',
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
    category: 'Parent Props',
  },
  {
    name: 'nameComponent',
    type: 'string',
    control: false,
    defaultValue: 'AddToCartButton',
    category: 'Parent Props',
  },
]);

export default {
  title: 'Components/Button/Extended/AddToCartButton',
  component: AddToCartButton,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          inheritFrom: 'Button',
          source: 'src/features/cart/components/buttons/AddToCartButton/AddToCartButton.tsx',
        }),
      },
    },
  },
  argTypes: customProps,
};

export const Template = (args: AddToCartButtonProps) => <AddToCartButton {...args} />;
Template.args = {
  isInCart: false,
  isLoading: false,
  isOutOfStock: false,
};

export const AddToCartButtonDefault = () => (
  <AddToCartButton isInCart={false} isLoading={false} isOutOfStock={false} onClick={() => {}} />
);
export const AddToCartButtonInCart = () => (
  <AddToCartButton isInCart={true} isLoading={false} isOutOfStock={false} onClick={() => {}} />
);
export const AddToCartButtonOutOfStock = () => (
  <AddToCartButton isInCart={false} isLoading={false} isOutOfStock={true} onClick={() => {}} />
);
export const AddToCartButtonLoading = () => (
  <AddToCartButton isInCart={false} isLoading={true} isOutOfStock={false} onClick={() => {}} />
);
