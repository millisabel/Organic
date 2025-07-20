import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import Button from './Button';
import type { ButtonProps } from './types';
import { buttonSizeOptions, buttonStateOptions, buttonVariantOptions } from './variants';
import { createArgTypesFromArray, getStoryDescription } from '@/utils/storiesHelpers';

const customProps = createArgTypesFromArray([
  {
    name: 'variant',
    options: buttonVariantOptions,
    control: 'select',
    type: 'string',
    defaultValue: 'default',
    subcategory: 'Variant',
  },
  {
    name: 'size',
    control: 'select',
    options: buttonSizeOptions,
    type: 'string',
    defaultValue: 'default',
    subcategory: 'Variant',
  },
  {
    name: 'state',
    control: 'select',
    options: buttonStateOptions,
    type: 'string',
    defaultValue: 'default',
    subcategory: 'Variant',
  },
  {
    name: 'nameComponent',
    control: false,
    type: 'string',
    defaultValue: 'Button',
  },
  {
    name: 'children',
    control: 'text',
    type: 'string',
    defaultValue: 'Default Button',
  },
  {
    name: 'className',
    control: 'text',
    type: 'string',
    defaultValue: 'Default Button',
  },
  {
    name: 'disabled',
    control: 'boolean',
    type: 'boolean',
    defaultValue: false,
    category: 'Inherited from HTMLButtonElement',
  },
  {
    name: 'asChild',
    control: false,
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    name: 'type',
    control: false,
    defaultValue: 'button',
    category: 'Inherited from HTMLButtonElement',
  },
  {
    name: 'onClick',
    control: false,
    type: 'event: React.MouseEvent<HTMLButtonElement>',
    category: 'Inherited from HTMLButtonElement',
  },
  {
    name: 'aria-label',
    control: false,
    type: 'string',
    defaultValue: 'Button',
    category: 'Inherited from HTMLButtonElement',
  },
  {
    name: 'ref',
    control: false,
    type: 'boolean',
    defaultValue: 'false',
    category: 'React.forwardRef',
  },
]);

export default {
  title: 'Components/Button/UI',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/ui/Button/Button.tsx',
        }),
      },
    },
  },
  argTypes: customProps,
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
