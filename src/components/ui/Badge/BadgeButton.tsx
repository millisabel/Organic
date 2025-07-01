import { Button } from '../Button';

interface BadgeButtonProps {
  category: string;
  handleCategoryClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const BadgeButton = ({ category, handleCategoryClick }: BadgeButtonProps) => {
  return (
    <Button onClick={handleCategoryClick} variant="badgeProduct" size="compactButton">
      {category}
    </Button>
  );
};

export default BadgeButton;
