import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import Button from './Button';
import type { ButtonProps } from './types';
import { buttonSizeOptions, buttonStateOptions, buttonVariantOptions } from './variants';

export default {
  title: 'Components/Button/UI',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'src/components/ui/Button/Button.tsx',
      },
      toc: true,
    },
  },
  argTypes: {
    asChild: {
      control: false,
      table: {
        type: { summary: 'boolean' },
        category: 'System',
      },
    },
    children: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Default Button' },
        category: 'Content',
      },
    },
    nameComponent: {
      control: false,
      table: {
        type: { summary: 'string' },
        category: 'System',
      },
    },
    className: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        category: 'Appearance',
      },
    },
    variant: {
      control: 'select',
      options: buttonVariantOptions,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Appearance',
      },
    },
    size: {
      control: 'select',
      options: buttonSizeOptions,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Appearance',
      },
    },
    state: {
      control: 'select',
      options: buttonStateOptions,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Appearance',
      },
    },
    type: {
      control: false,
      table: {
        label: 'Type',
        type: { summary: 'string' },
        category: 'System',
      },
    },
  },
};

export const Default = (args: ButtonProps) => <Button {...args} />;
Default.args = {
  children: 'Default Button',
};

export const VariantDefault = () => <Button variant="default">Default Button</Button>;
export const VariantDisabled = () => (
  <Button disabled state="disabled">
    Disabled Button
  </Button>
);
export const VariantOutline = () => <Button variant="outline">Outline Button</Button>;
export const VariantAccent = () => <Button variant="accent">Accent Button</Button>;
export const VariantTransparent = () => <Button variant="transparent">Transparent Button</Button>;
export const VariantClose = () => <Button variant="close">Close Button</Button>;
export const VariantRed = () => <Button variant="red">Trash Button</Button>;
export const ButtonWithIcon = () => (
  <Button variant="default">
    Button with ArrowIcon
    <ArrowIcon className="mr-2" />
  </Button>
);
export const ButtonSizeCompact = () => (
  <Button variant="default" size="compact">
    compact
  </Button>
);
export const ButtonSizeEllipse = () => (
  <Button variant="default" size="ellipse">
    ellipse
  </Button>
);
export const ButtonSizeSquare = () => (
  <Button variant="default" size="square">
    square
  </Button>
);
export const ButtonSizeCircle = () => (
  <Button variant="default" size="circle">
    circle
  </Button>
);
export const ButtonStateLight = () => (
  <Button variant="light" state="default">
    light
  </Button>
);
export const ButtonStateLoading = () => (
  <Button variant="default" state="loading">
    loading
  </Button>
);
export const ButtonStateSuccess = () => (
  <Button variant="default" state="success">
    success
  </Button>
);
export const ButtonStateNotActive = () => (
  <Button variant="light" state="notActive">
    notActive
  </Button>
);
