import CloseButton from '@/components/shared/Button/CloseButton/CloseButton';
import type { CloseButtonProps } from './types';
import {
  buttonSizeOptions,
  buttonStateOptions,
  buttonVariantOptions,
} from '@/components/ui/Button/variants';

export default {
  title: 'Components/Button/Extended/CloseButton',
  component: CloseButton,
  parameters: {
    docs: {
      description: {
        component: 'src/components/shared/Button/CloseButton/CloseButton.tsx',
        story: 'Inherited from Button',
      },
      toc: true,
    },
  },
  argTypes: {
    onClick: {
      action: false,
      table: {
        type: { summary: 'function' },
      },
    },
    ariaLabel: {
      control: false,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Close' },
      },
    },
    variant: {
      control: 'select',
      options: buttonVariantOptions,
      table: {
        type: { summary: 'string' },
        category: 'Parent Props',
      },
    },
    size: {
      control: 'select',
      options: buttonSizeOptions,
      table: {
        type: { summary: 'string' },
        category: 'Parent Props',
      },
    },
    state: {
      control: 'select',
      options: buttonStateOptions,
      table: {
        type: { summary: 'string' },
        category: 'Parent Props',
      },
    },
    children: {
      control: false,
      table: {
        type: { summary: 'string' },
        detail: 'Icon Close',
        category: 'Parent Props',
        defaultValue: { summary: 'Icon Close' },
      },
    },
    asChild: {
      control: false,
      table: {
        type: { summary: 'boolean' },
        category: 'Parent Props',
        defaultValue: { summary: 'false' },
      },
    },
    nameComponent: {
      control: false,
      table: {
        type: { summary: 'string' },
        category: 'Parent Props',
        defaultValue: { summary: 'CloseButton' },
      },
    },
    className: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        category: 'Parent Props',
      },
    },
  },
};

export const Default = (args: CloseButtonProps) => <CloseButton {...args} />;
Default.args = {
  children: 'Close',
};
