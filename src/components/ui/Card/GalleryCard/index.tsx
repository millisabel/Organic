import Card from '@/components/ui/Card';
import type { GalleryCardProps } from './types';

const GalleryCard = ({ title, image }: GalleryCardProps) => (
  <Card
    variant="gallery"
    className="relative"
    tabIndex={0}
    ariaLabel={title}
    data-component="GalleryCard"
    imgProps={{
      folder: 'gallery',
      name: image,
    }}
    contentClassName="absolute inset-0"
  >
    <span className="bg-white bg-opacity-90 rounded-lg px-10 py-3 text-lg font-semibold shadow">
      {title}
    </span>
  </Card>
);

export default GalleryCard;
