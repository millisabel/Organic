import { cn, getImageUrl } from '@/utils/helpers';
import React, { useState } from 'react';
import type { CardProps } from './card.types';
import {
  cardContentVariants,
  cardVariants,
  getCardContentVariants,
  getCardVariants,
} from './card.variats';

export type CardVariants =
  | 'default'
  | 'product'
  | 'productDetailed'
  | 'team'
  | 'category'
  | 'gallery'
  | 'news'
  | 'review';

const Card: React.FC<CardProps> = ({
  variant = 'default',
  children,
  imgProps,
  ariaLabel,
  tabIndex,
  className,
  imgClassName,
  contentClassName,
  badges,
  onClick,
  onKeyDown,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  // Generate image URL and alt text
  const imageUrl = getImageUrl(imgProps?.folder || 'images', imgProps?.name || '');
  const alt = imgProps?.alt || imgProps?.name?.split('.')[0] || '';

  // Generate classes using the new CVA structure
  const cardClasses = cn(cardVariants(getCardVariants(variant)), className);
  const imageClasses = cn('inline-block w-full h-full object-contain', imgClassName);
  const contentClasses = cn(cardContentVariants(getCardContentVariants(variant)), contentClassName);

  // Handle keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
    onKeyDown?.(e);
  };

  // Handle image load events
  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  // Determine if the card should be interactive
  const isInteractive = onClick || onKeyDown;
  const cardRole = isInteractive ? 'button' : undefined;
  const cardTabIndex = isInteractive ? (tabIndex ?? 0) : tabIndex;

  return (
    <div
      className={cardClasses}
      aria-label={ariaLabel}
      tabIndex={cardTabIndex}
      role={cardRole}
      data-component="Card"
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      {/* Render badges if provided */}
      {badges && (
        <>
          {Array.isArray(badges)
            ? badges.map((badge, idx) => <React.Fragment key={idx}>{badge}</React.Fragment>)
            : badges}
        </>
      )}

      {/* Image container with loading and error handling */}
      <div className="flex-1 w-full relative">
        {imageLoading && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
            <div className="text-gray-400 text-sm">Loading...</div>
          </div>
        )}

        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
            <div className="text-center">
              <div className="text-sm">Image not found</div>
              <div className="text-xs mt-1">{imgProps?.name}</div>
            </div>
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={alt}
            className={imageClasses}
            loading={imgProps?.loading || 'lazy'}
            onLoad={handleImageLoad}
            onError={handleImageError}
            data-component="CardImage"
          />
        )}
      </div>

      {/* Content container */}
      <div className={contentClasses} data-component="CardContent">
        {children}
      </div>
    </div>
  );
};

export default Card;
