import Button from '../../Button/Button';
import type { BadgeButtonProps } from '.';

const BadgeButton = ({ category, handleCategoryClick }: BadgeButtonProps) => (
  <Button onClick={handleCategoryClick} size="compact">
    {category}
  </Button>
);

export default BadgeButton;
