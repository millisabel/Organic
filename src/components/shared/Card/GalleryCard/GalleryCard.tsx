import Card from '@/components/ui/Card';
import CardContent from '@/components/ui/Card/components/CardContent';
import Image from '@/components/ui/Image';
import Title from '@/components/ui/Typography/Title';
import type { GalleryCardProps } from './types';

const GalleryCard = ({ data }: GalleryCardProps) => {
  const { title, image, imageSize } = data;

  return (
    <Card
      className="relative min-w-[200px] max-w-[500px] w-full aspect-square rounded-none mx-auto"
      data-component="GalleryCard"
      nameComponent="GalleryCard"
    >
      <Image
        src={image}
        alt={title}
        folder="gallery"
        className="h-full w-full"
        imageClassName="h-full w-full"
        width={imageSize?.width || 300}
        height={imageSize?.height || 300}
      />

      <CardContent className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 m-auto bg-white/90 px-10 py-3 shadow rounded-lg">
        <Title variant="cardTitle" className="line-clamp-1">
          {title}
        </Title>
      </CardContent>
    </Card>
  );
};

export default GalleryCard;
