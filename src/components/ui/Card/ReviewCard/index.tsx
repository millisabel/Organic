import Card from '@/components/ui/Card';
import StarIcon from '../../../shared/Icon/StarIcon';
import type { ReviewCardProps } from './types';

const ReviewCard = ({ name, job, text, rating, image }: ReviewCardProps) => {
  return (
    <Card
      variant="review"
      imgProps={{
        folder: 'customers',
        name: image,
        alt: name,
      }}
      imgClassName="w-[115px] h-[115px] rounded-full object-cover block mx-auto"
      data-component="ReviewCard"
    >
      <>
        <div className="flex items-center gap-2 mb-6 justify-center">
          {Array.from({ length: rating }).map((_, index) => (
            <StarIcon key={index} className="text-star-fill" />
          ))}
        </div>
        <div className="flex flex-col gap-2 text-center">
          <h3 className="font-roboto text-primary text-2xl font-semibold order-2">{name}</h3>
          <p className="text-light font-opensans text-base mb-4 line-clamp-6 lg:line-clamp-3 order-1">
            {text}
          </p>
          <p className="text-light font-opensans text-small order-3">{job}</p>
        </div>
      </>
    </Card>
  );
};

export default ReviewCard;
