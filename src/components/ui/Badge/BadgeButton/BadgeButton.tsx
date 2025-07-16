import Button from '../../Button/Button';
import type { BadgeButtonProps } from '.';

const BadgeButton = ({ text, handleCategoryClick }: BadgeButtonProps) => (
  <Button onClick={handleCategoryClick} size="compact">
    {text}
  </Button>
);

export default BadgeButton;
