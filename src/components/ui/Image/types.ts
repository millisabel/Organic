import type { ImgHTMLAttributes, SyntheticEvent } from 'react';

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  folder?: string;
  fallbackSrc?: string;
  onError?: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
  onLoad?: () => void;
}
