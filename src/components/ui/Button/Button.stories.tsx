import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import Button from './Button';

export default {
  title: 'Button/Components/UI/Button',
  component: Button,
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
