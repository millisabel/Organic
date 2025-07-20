import { createArgTypesFromArray, getStoryDescription } from '@/utils/storiesHelpers';
import MenuButton from './MenuButton';
import type { MenuButtonProps } from './types';
import {
  buttonSizeOptions,
  buttonStateOptions,
  buttonVariantOptions,
} from '@/components/ui/Button/variants';

const customProps = createArgTypesFromArray([
  {
    name: 'isOpen',
    type: 'boolean',
    defaultValue: 'false',
    control: 'boolean',
  },
  {
    name: 'nameComponent',
    type: 'string',
    defaultValue: 'MenuButton',
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
    name: 'children',
    type: 'React.ReactNode',
    defaultValue: 'Icon Menu',
    control: false,
    category: 'Parent Props',
  },
  {
    name: 'variant',
    type: 'string',
    defaultValue: 'transparent',
    control: 'select',
    options: buttonVariantOptions,
    category: 'Parent Props',
    subcategory: 'Variant',
  },
  {
    name: 'size',
    type: 'string',
    defaultValue: 'circle',
    control: 'select',
    options: buttonSizeOptions,
    category: 'Parent Props',
    subcategory: 'Variant',
  },
  {
    name: 'state',
    type: 'string',
    defaultValue: 'default',
    control: 'select',
    options: buttonStateOptions,
    category: 'Parent Props',
    subcategory: 'Variant',
  },
]);

export default {
  title: 'Components/Button/Extended/MenuButton',
  component: MenuButton,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          inheritFrom: 'Button',
          source: 'src/components/shared/Button/MenuButton/MenuButton.tsx',
        }),
      },
    },
    controls: {
      exclude: ['asChild'],
    },
  },
  argTypes: customProps,
};

export const Template = (args: MenuButtonProps) => <MenuButton {...args} />;
Template.args = {
  isOpen: false,
};
