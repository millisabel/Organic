import { cn, getImageUrl } from '@/utils/helpers';
import React from 'react';
import type { CardProps } from './card.types';
import {
  getCardClassNames,
  getCardImageVariants,
  cardVariants,
  cardImageVariants,
  cardContentVariants,
  getCardContentVariants,
} from './card.variats';

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
  const cardVariantsObj = getCardClassNames(variant);
  const cardClasses = cn(cardVariants(cardVariantsObj), className);
  const imageVariantsObj = getCardImageVariants(variant);
  const imageClasses = cn(cardImageVariants(imageVariantsObj), imgClassName);
  const contentVariantsObj = getCardContentVariants(variant);
  const contentClasses = cn(cardContentVariants(contentVariantsObj), contentClassName);

  return (
    <div className={cardClasses} aria-label={ariaLabel} tabIndex={tabIndex} data-component="Card">
      <div className="flex-1">
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
