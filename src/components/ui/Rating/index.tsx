import React from 'react';
import { cn } from '@/utils/helpers';
import StarIcon from '../../icons/StarIcon';

interface IRatingProps {
  rating: number;
  className?: string;
}

const Rating: React.FC<IRatingProps> = ({ rating, className }) => {
  const totalStars = 5;
  const filledStars = Math.round(rating);

  return (
    <div className={cn('flex items-center gap-1', className)}>
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
