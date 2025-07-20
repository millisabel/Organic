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
    },
  },
  argTypes: {
    // Variant Props (from class-variance-authority)
    variant: {
      control: 'select',
      options: buttonVariantOptions,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Custom Props',
        subcategory: 'Variant',
      },
    },
    size: {
      control: 'select',
      options: buttonSizeOptions,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Custom Props',
        subcategory: 'Variant',
      },
    },
    state: {
      control: 'select',
      options: buttonStateOptions,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Custom Props',
        subcategory: 'Variant',
      },
    },
    // Custom Props
    className: {
      control: 'text',
      table: {
        type: { summary: 'string', description: 'The class name of the button' },
        category: 'Custom Props',
      },
    },
    asChild: {
      control: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Custom Props',
      },
    },
    nameComponent: {
      control: false,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Button' },
        category: 'Custom Props',
      },
    },
    children: {
      control: 'text',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'Default Button' },
        category: 'Custom Props',
      },
    },
    // React.forwardRef Props
    ref: {
      control: false,
      table: {
        type: { summary: 'React.Ref<HTMLButtonElement>' },
        defaultValue: { summary: 'null' },
        category: 'React.forwardRef',
      },
    },
    // Inherited HTML Props
    onClick: {
      action: 'clicked',
      table: {
        type: { summary: '(event: React.MouseEvent<HTMLButtonElement>) => void' },
        category: 'Inherited from HTMLButtonElement',
      },
    },
    type: {
      control: false,
      table: {
        defaultValue: { summary: 'button' },
        category: 'Inherited from HTMLButtonElement',
      },
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Inherited from HTMLButtonElement',
      },
    },
    'aria-label': {
      control: false,
      defaultValue: null,
      table: {
        type: { summary: 'string' },
        category: 'Inherited from HTMLButtonElement',
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
