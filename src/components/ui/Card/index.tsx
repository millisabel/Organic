import { cn, getImageUrl } from '@/utils/helpers';
import type { VariantProps } from 'class-variance-authority';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { cardVariants, imageVariants } from './variants';

export interface CardProps {
  children?: React.ReactNode;
  cardProps?: {
    variant?: VariantProps<typeof cardVariants>['variant'];
    size?: VariantProps<typeof cardVariants>['size'];
    className?: string;
  };
  imgProps?: {
    name: string;
    folder: string;
    size?: VariantProps<typeof imageVariants>['size'];
    className?: string;
    rounded?: VariantProps<typeof imageVariants>['rounded'];
  };
}

const Card: React.FC<CardProps> = ({ children, cardProps, imgProps }) => {
  const cardClasses = twMerge(
    cardVariants({ variant: cardProps?.variant, size: cardProps?.size }),
    cardProps?.className,
  );
  const imageUrl = getImageUrl(imgProps?.folder || 'images', imgProps?.name || '');
  const imageClasses = cn(
    imageVariants({ size: imgProps?.size, rounded: imgProps?.rounded }),
    imgProps?.className,
  );

  return (
    <div className={cardClasses} data-component="Card">
      <img src={imageUrl} alt={imgProps?.name?.split('.')[0] || ''} className={imageClasses} />
      {children}
    </div>
  );
};

export default Card;
