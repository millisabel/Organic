import { cn } from '@/utils/helpers';
import React from 'react';
import StarIcon from '../Icon/StarIcon';

interface IRatingProps {
  rating: number;
  className?: string;
}

const Rating: React.FC<IRatingProps> = ({ rating, className }) => {
  const totalStars = 5;
  const filledStars = Math.round(rating);

  return (
    <div className={cn('flex items-center gap-1', className)} data-component="Rating">
      {[...Array(totalStars)].map((_, index) => (
        <StarIcon
          key={index}
          className={index < filledStars ? 'text-star-fill' : 'text-placeholder-text'}
        />
      ))}
    </div>
  );
};

export default Rating;
