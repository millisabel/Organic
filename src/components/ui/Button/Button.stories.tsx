import ArrowIcon from '@/components/ui/Icon/ArrowIcon';
import Button from './Button';

export default {
  title: 'UI/Button',
  component: Button,
};

export const Default = () => <Button variant="default">Default Button</Button>;
export const Disabled = () => (
  <Button disabled state="disabled">
    Disabled Button
  </Button>
);
export const Outline = () => <Button variant="outline">Outline Button</Button>;
export const Accent = () => <Button variant="accent">Accent Button</Button>;
export const Transparent = () => <Button variant="transparent">Transparent Button</Button>;
export const Close = () => <Button variant="close">Close Button</Button>;
export const Red = () => <Button variant="red">Trash Button</Button>;
export const WithIcon = () => (
  <Button variant="default">
    Button with ArrowIcon
    <ArrowIcon className="mr-2" />
  </Button>
);
export const SizeCompact = () => (
  <Button variant="default" size="compact">
    compact
  </Button>
);
export const SizeEllipse = () => (
  <Button variant="default" size="ellipse">
    ellipse
  </Button>
);
export const SizeSquare = () => (
  <Button variant="default" size="square">
    square
  </Button>
);
export const SizeCircle = () => (
  <Button variant="default" size="circle">
    circle
  </Button>
);

export const StateLoading = () => (
  <Button variant="default" state="loading">
    loading
  </Button>
);
export const StateSuccess = () => (
  <Button variant="default" state="success">
    success
  </Button>
);
