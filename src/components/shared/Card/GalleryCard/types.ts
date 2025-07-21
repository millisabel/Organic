import type { CardProps } from '../../../ui/Card/types';

export interface GalleryCardData {
  id: number;
  title: string;
  image: string;
}

export interface GalleryCardProps extends CardProps {
  data: GalleryCardData;
}
