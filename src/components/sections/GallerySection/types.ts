import type { SectionProps } from '@/components/layout/Section/types';
import type { GalleryCardData } from '@/components/shared/Card/GalleryCard/types';

export interface GallerySectionProps extends SectionProps {
  data: GalleryCardData[];
}
