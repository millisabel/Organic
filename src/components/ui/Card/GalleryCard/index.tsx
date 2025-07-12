import Card from '@/components/ui/Card';
import type { GalleryCardProps } from './types';

const GalleryCard = ({ data }: GalleryCardProps) => (
  <Card
    variant="gallery"
    className="relative"
    tabIndex={0}
    ariaLabel={data.title}
    data-component="GalleryCard"
    imgProps={{
      folder: 'gallery',
      name: data.image,
    }}
  >
    <span className="m-auto bg-white bg-opacity-90 rounded-lg px-10 py-3 text-lg font-semibold shadow">
      {data.title}
    </span>
  </Card>
);

export default GalleryCard;
