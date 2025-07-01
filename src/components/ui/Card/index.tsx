import React from 'react';
import { twMerge } from 'tailwind-merge';
import { cardVariants } from './variants';
import type { VariantProps } from 'class-variance-authority';

interface ICardProps {
  children: React.ReactNode;
  className?: string;
  variant?: VariantProps<typeof cardVariants>['variant'];
  size?: VariantProps<typeof cardVariants>['size'];
}

const Card: React.FC<ICardProps> = ({ children, className, variant, size }) => {
  const cardClasses = twMerge(cardVariants({ variant, size }), className);

  return (
    <div className={cardClasses} data-component="Card">
      {children}
    </div>
  );
};

export default Card;
