import { cn, getImageUrl } from '@/utils/helpers';
import React, { useState } from 'react';
import type { ImageProps } from './types';

const Image: React.FC<ImageProps> = ({
  src,
  folder,
  alt = '',
  className,
  imageClassName,
  role = 'img',
  'aria-hidden': ariaHidden,
  fallbackSrc,
  onError,
  onLoad,
  width,
  height,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const imageUrl = folder ? getImageUrl(folder, src) : src;
  const displaySrc = hasError && fallbackSrc ? fallbackSrc : imageUrl;

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    onLoad?.();
  };

  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (fallbackSrc && !hasError) {
      setHasError(true);
      setIsLoaded(false);
      return;
    }

    setHasError(true);
    setIsLoaded(false);
    onError?.(event);
  };
  return (
    <div
      className={cn('flex justify-center items-center w-full h-full overflow-hidden', className)}
    >
      <img
        src={displaySrc}
        alt={alt || 'Image: ' + src.split('/').pop()?.split('.')[0]}
        width={width}
        height={height}
        loading="lazy"
        className={cn(
          'w-full h-auto object-cover transition-opacity duration-300',
          {
            'opacity-0': !isLoaded && !hasError,
            'opacity-100': isLoaded || hasError,
          },
          imageClassName,
        )}
        role={role}
        aria-hidden={ariaHidden}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default Image;
