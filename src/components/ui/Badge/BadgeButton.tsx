import Button from '../Button/Button';

interface BadgeButtonProps {
  category: string;
  handleCategoryClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const BadgeButton = ({ category, handleCategoryClick }: BadgeButtonProps) => (
  <Button onClick={handleCategoryClick} size="compact" rounded="lg" font="small">
    {category}
  </Button>
);

export default BadgeButton;
