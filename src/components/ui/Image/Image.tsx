import { cn, getImageUrl } from '@/utils/helpers';
import React, { useState } from 'react';
import type { ImageProps } from './types';

const Image: React.FC<ImageProps> = ({
  src,
  folder,
  alt = '',
  className,
  role = 'img',
  'aria-hidden': ariaHidden,
  fallbackSrc,
  onError,
  onLoad,
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
    <div className="flex justify-center items-center overflow-hidden">
      <img
        src={displaySrc}
        alt={alt || 'Image: ' + src.split('/').pop()?.split('.')[0]}
        className={cn(
          'w-full h-auto object-cover transition-opacity duration-300',
          {
            'opacity-0': !isLoaded && !hasError,
            'opacity-100': isLoaded || hasError,
          },
          className,
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
