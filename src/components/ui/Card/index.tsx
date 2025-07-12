import { cn, getImageUrl } from '@/utils/helpers';
import React from 'react';
import type { CardContentVariantsProps, CardProps, CardVariantsProps } from './card.types';
import {
  getCardClassNames,
  cardVariants,
  cardContentVariants,
  getCardContentVariants,
} from './card.variats';

export type CardVariants = 'default' | 'product' | 'team' | 'category' | 'gallery' | 'news';

const Card: React.FC<CardProps> = ({
  variant = 'default',
  children,
  imgProps,
  ariaLabel,
  tabIndex,
  className,
  imgClassName,
  contentClassName,
}) => {
  const imageUrl = getImageUrl(imgProps?.folder || 'images', imgProps?.name || '');
  const alt = imgProps?.alt || imgProps?.name?.split('.')[0] || '';
  const CardVariants = getCardClassNames(variant);
  const cardClasses = cn(cardVariants(CardVariants as unknown as CardVariantsProps), className);
  const imageClasses = cn('inline-block w-full h-full object-contain', imgClassName);
  const contentVariantsObj = getCardContentVariants(variant);
  const contentClasses = cn(
    cardContentVariants(contentVariantsObj as unknown as CardContentVariantsProps),
    contentClassName,
  );

  return (
    <div className={cardClasses} aria-label={ariaLabel} tabIndex={tabIndex} data-component="Card">
      <div className="flex-1 w-full">
        <img
          src={imageUrl}
          alt={alt}
          className={imageClasses}
          loading={imgProps?.loading || 'lazy'}
          data-component="CardImage"
        />
      </div>
      <div className={contentClasses} data-component="CardContent">
        {children}
      </div>
    </div>
  );
};

export default Card;
