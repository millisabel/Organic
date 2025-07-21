import type { BadgeButtonProps } from '.';
import Button from '../../../../Button/Button';

const BadgeButton = ({ children, ...props }: BadgeButtonProps) => (
  <Button size="compact" {...props}>
    {children}
  </Button>
);

export default BadgeButton;
