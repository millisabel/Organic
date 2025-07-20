import CloseButton from '@/components/shared/Button/CloseButton/CloseButton';
import type { CloseButtonProps } from './types';
import {
  buttonSizeOptions,
  buttonStateOptions,
  buttonVariantOptions,
} from '@/components/ui/Button/variants';
import { createArgTypesFromArray, getStoryDescription } from '@/utils/storiesHelpers';

const customProps = createArgTypesFromArray([
  {
    name: 'nameComponent',
    type: 'string',
    defaultValue: 'CloseButton',
    control: false,
    category: 'Parent Props',
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    defaultValue: 'Icon Close',
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
    name: 'variant',
    type: 'string',
    defaultValue: 'close',
    control: 'select',
    options: buttonVariantOptions,
    category: 'Parent Props',
  },
  {
    name: 'size',
    type: 'string',
    defaultValue: 'circle',
    control: 'select',
    options: buttonSizeOptions,
    category: 'Parent Props',
  },
  {
    name: 'state',
    type: 'string',
    defaultValue: 'default',
    control: 'select',
    options: buttonStateOptions,
    category: 'Parent Props',
  },
  {
    name: 'aria-label',
    type: 'string',
    defaultValue: 'Close',
    control: false,
    category: 'Parent Props',
  },
]);

export default {
  title: 'Components/Button/Extended/CloseButton',
  component: CloseButton,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          inheritFrom: 'Button',
          source: 'src/components/shared/Button/CloseButton/CloseButton.tsx',
        }),
      },
    },
    controls: {
      exclude: ['onClick', 'asChild'],
    },
  },
  argTypes: customProps,
};

export const Default = (args: CloseButtonProps) => <CloseButton {...args} />;
Default.args = {
  children: 'Close',
};
