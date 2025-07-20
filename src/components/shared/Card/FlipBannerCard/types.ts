export interface FlipBannerCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  flipDirection?: 'left' | 'right';
  className?: string;
}
