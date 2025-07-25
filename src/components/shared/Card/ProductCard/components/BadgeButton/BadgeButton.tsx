import type { BadgeButtonProps } from '.';
import Button from '../../../../../ui/Button/Button';

const BadgeButton = ({ children, onClick, ...props }: BadgeButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick?.(e);
    e.currentTarget.blur();
  };

  return (
    <Button size="compact" onClick={handleClick} {...props}>
      {children}
    </Button>
  );
};

export default BadgeButton;
