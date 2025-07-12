import AuthorDisplay from '@/components/shared/AuthorDisplay';
import NavigateButton from '@/components/ui/Button/NavigateButton';
import Card from '@/components/ui/Card';
import ArrowIcon from '@/components/ui/Icon/ArrowIcon';
// import { formatDate } from '@/utils/helpers';
import React from 'react';
import type { NewsCardProps } from './types';

const NewsCard: React.FC<NewsCardProps> = ({ data }) => {
  // const shortDate = formatDate({ date, format: 'short' });
  return (
    <Card
      variant="news"
      tabIndex={0}
      ariaLabel={data.title}
      className="relative"
      imgClassName="object-cover w-full h-full rounded-xl"
      imgProps={{
        folder: 'news',
        name: data.imageUrl,
      }}
      data-component="NewsCard"
    >
      {/* <div className="absolute top-4 left-4 flex flex-col items-center justify-center w-20 h-20 bg-white rounded-full font-bold shadow text-primary">
        <span className="text-2xl">{shortDate.split(' ')[1]}</span>
        <span className="text-sm">{shortDate.split(' ')[0]}</span>
      </div> */}
      <>
        <AuthorDisplay author={data.author} iconClassName="text-yellow-300" />
        <div className="font-semibold text-medium mb-1 text-primary">{data.title}</div>
        <div className="items-end text-sm text-gray-600 mb-4 line-clamp-2">{data.description}</div>
        <NavigateButton
          text="Read More"
          icon={<ArrowIcon variant="arrow" size="md" />}
          variant="accent"
          to={`/blog/${data.id}`}
          className="mt-auto"
        />
      </>
    </Card>
  );
};

export default NewsCard;
