import { cn, getImageUrl } from '@/utils/helpers';
import React from 'react';
import type { ImageProps } from './types';

const Image: React.FC<ImageProps> = ({
  src,
  folder,
  alt = '',
  className,
  role = 'img',
  'aria-hidden': ariaHidden,
  ...props
}) => {
  const imageUrl = folder ? getImageUrl(folder, src) : src;

  return (
    <img
      src={imageUrl}
      alt={alt || 'Image: ' + src.split('/').pop()?.split('.')[0]}
      className={cn('w-full h-full object-cover', className)}
      role={role}
      aria-hidden={ariaHidden}
      {...props}
    />
  );
};

export default Image;
