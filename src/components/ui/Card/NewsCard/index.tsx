import AuthorDisplay from '@/components/shared/AuthorDisplay';
import NavigateButton from '@/components/ui/Button/NavigateButton';
import { cardVariants } from '@/components/ui/Card/variants';
import ArrowIcon from '@/components/ui/Icon/ArrowIcon';
import { cn, formatDate, getImageUrl } from '@/utils/helpers';
import React from 'react';
import type { NewsCardProps } from './newsCard.types';

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  date,
  author,
  title,
  description,
  imageUrl,
  onClick,
}) => {
  const shortDate = formatDate({ date, format: 'short' });

  return (
    <div
      className={cn(cardVariants({ variant: 'news', size: 'news' }))}
      tabIndex={0}
      aria-label={title}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onClick?.();
      }}
      role="button"
    >
      <img
        src={getImageUrl('news', imageUrl)}
        alt={title}
        className="object-cover w-full h-full rounded-xl p-"
      />
      <div className="absolute top-4 left-4 flex flex-col items-center justify-center w-20 h-20 bg-white rounded-full font-bold shadow text-primary">
        <span className="text-2xl">{shortDate.split(' ')[1]}</span>
        <span className="text-sm">{shortDate.split(' ')[0]}</span>
      </div>
      <div
        className="
        absolute md:left-4 md:right-4  
        min-h-[330px] h-1/2 px-2 pt-6 pb-8 md:px-14 md:pt-11 md:pb-12
        md:rounded-t-xl md:rounded-r-xl rounded-b-xl
        flex flex-col justify-center gap-1
        bottom-0 md:-bottom-24
        bg-white bg-opacity-95 shadow-lg
        transition-all
      "
      >
        <AuthorDisplay author={author} iconClassName="text-yellow-300" />
        <div className="font-semibold text-medium mb-1 text-primary">{title}</div>
        <div className="items-end text-sm text-gray-600 mb-4 line-clamp-2">{description}</div>
        <NavigateButton
          text="Read More"
          icon={<ArrowIcon variant="arrow" size="md" />}
          variant="accent"
          to={`/blog/${id}`}
          className="mt-auto"
        />
      </div>
    </div>
  );
};

export default NewsCard;
