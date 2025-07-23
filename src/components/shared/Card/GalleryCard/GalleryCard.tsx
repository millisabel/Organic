import Card from '@/components/ui/Card';
import type { GalleryCardProps } from './types';
import Image from '@/components/ui/Image';
import CardContent from '@/components/ui/Card/components/CardContent';
import Title from '@/components/ui/Typography/Title';

const GalleryCard = ({ data }: GalleryCardProps) => {
  const { title, image } = data;

  return (
    <Card
      className="relative min-w-[200px]  w-full aspect-square rounded-none"
      data-component="GalleryCard"
      nameComponent="GalleryCard"
    >
      <Image
        src={image}
        alt={title}
        folder="gallery"
        className="absolute top-0 left-0 z-0 w-full h-full object-cover"
      />
      <CardContent className="relative z-10 m-auto bg-white/90 px-10 py-3 shadow rounded-lg">
        <Title variant="cardTitle">{title}</Title>
      </CardContent>
    </Card>
  );
};

export default GalleryCard;
