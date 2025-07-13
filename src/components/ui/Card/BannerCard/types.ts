export interface BannerCardProps {
  imageUrl: string;
  accent: string;
  title: string;
  bgBackColor?: string;
  flipDirection?: 'left' | 'right';
  backFeatures: string[];
  category?: string;
}
