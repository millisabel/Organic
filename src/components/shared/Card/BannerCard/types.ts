import type { CardProps } from '@/components/ui/Card/types';

export interface BannerCardProps extends CardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  flipDirection?: 'left' | 'right';
  backFeatures?: string[];
  titleColor?: string;
  imageSize?: {
    width: number;
    height: number;
  };
}
