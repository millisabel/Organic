import React from 'react';
import { twMerge } from 'tailwind-merge';
import StarIcon from '../../icons/StarIcon';

interface IRatingProps {
  rating: number;
  className?: string;
}

const Rating: React.FC<IRatingProps> = ({ rating, className }) => {
  const totalStars = 5;
  const filledStars = Math.round(rating);

  return (
    <div className={twMerge('flex items-center gap-1', className)}>
      {[...Array(totalStars)].map((_, index) => (
        <StarIcon
          key={index}
          className={index < filledStars ? 'text-[#FFA858]' : 'text-gray-300'}
        />
      ))}
    </div>
  );
};

export default Rating;
