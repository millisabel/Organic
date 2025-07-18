import type { BadgeButtonProps } from '.';
import Button from '../../../../Button/Button';

const BadgeButton = ({ text, handleCategoryClick }: BadgeButtonProps) => (
  <Button onClick={handleCategoryClick} size="compact">
    {text}
  </Button>
);

export default BadgeButton;
