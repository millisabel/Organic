import StarIcon from '../../Icon/StarIcon';

interface ReviewCardProps {
  name: string;
  job: string;
  text: string;
  rating: number;
  image: string;
}

const ReviewCard = ({ name, job, text, rating, image }: ReviewCardProps) => {
  return (
    <div
      className="flex flex-col gap-4 items-center max-w-[800px] h-[550px] sm:h-[450px] pb-8 mx-auto"
      data-component="ReviewCard"
    >
      <div className="flex items-center gap-2 mb-4">
        <img src={image} alt={name} className="w-[115px] h-[115px] rounded-full object-cover" />
      </div>
      <div className="flex items-center gap-2 mb-6">
        {Array.from({ length: rating }).map((_, index) => (
          <StarIcon key={index} className="text-star-fill" />
        ))}
      </div>
      <div className="flex flex-col gap-2 text-center">
        <p className="text-light font-opensans text-base mb-4 line-clamp-6 lg:line-clamp-3">
          {text}
        </p>
        <h3 className="font-roboto text-primary text-2xl font-semibold">{name}</h3>
        <p className="text-light font-opensans text-small">{job}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
