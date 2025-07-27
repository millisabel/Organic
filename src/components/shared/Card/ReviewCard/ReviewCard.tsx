import Card from '@/components/ui/Card';
import type { ReviewCardProps } from './types';
import CardContent from '@/components/ui/Card/components/CardContent';
import CardHeader from '@/components/ui/Card/components/CardHeader';
import CardFooter from '@/components/ui/Card/components/CardFooter';
import Image from '@/components/ui/Image';
import Rating from '@/components/ui/Rating';
import Paragraph from '@/components/ui/Typography/Paragraph';
import Title from '@/components/ui/Typography/Title';
import { cn } from '@/utils/helpers';

const ReviewCard = ({ data }: ReviewCardProps) => {
  const { name, job, text, rating, image, imageSize } = data;

  return (
    <Card
      nameComponent="ReviewCard"
      variant="notShadow"
      className="bg-transparent px-4 lg:px-24 py-5 rounded-none"
    >
      <CardHeader className="flex flex-col items-center gap-5 mb-6">
        <Image
          src={image}
          alt={name}
          folder="customers"
          className="w-[115px] h-[115px] rounded-full"
          imageClassName="h-full w-full object-cover"
          width={imageSize?.width || 200}
          height={imageSize?.height || 200}
        />
        <Rating rating={rating} />
      </CardHeader>
      <CardContent className="relative justify-start h-[200px] md:h-[100px] mb-5">
        <Paragraph
          className={cn(
            'text-center text-[16px]',
            'mb-6 lg:mb-4',
            'line-clamp-8 md:line-clamp-6 lg:line-clamp-3',
            'order-1',
            'hover:absolute hover:line-clamp-none hover:top-0 hover:bg-white',
            'transition-all duration-300',
          )}
        >
          {text}
        </Paragraph>
      </CardContent>
      <CardFooter>
        <Title variant="cardTitle" level={3}>
          {name}
        </Title>
        <Paragraph className="text-small">{job}</Paragraph>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
