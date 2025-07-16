import { cn } from '@/utils/helpers';
import StarIcon from '../../shared/Icon/StarIcon';
import type { RatingProps } from '.';

const Rating = ({ rating, className }: RatingProps) => {
  const totalStars = 5;
  let filledStars = Math.round(rating);
  if (filledStars > 5) {
    filledStars = 5;
  } else if (filledStars < 0) {
    filledStars = 0;
  }

  return (
    <div className={cn('flex items-center gap-1', className)} data-component="Rating">
      {[...Array(totalStars)].map((_, index) => (
        <StarIcon
          key={index}
          className={index < filledStars ? 'text-accent-star' : 'text-text-placeholder'}
          size="sm"
        />
      ))}
    </div>
  );
};

export default Rating;
