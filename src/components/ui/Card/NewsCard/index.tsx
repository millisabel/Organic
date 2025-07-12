import AuthorDisplay from '@/components/shared/AuthorDisplay';
import NavigateButton from '@/components/ui/Button/NavigateButton';
import Card from '@/components/ui/Card';
import ArrowIcon from '@/components/ui/Icon/ArrowIcon';
import React from 'react';
import type { NewsCardProps } from './types';
import DataBadge from '../../Badge/DataBadge';

const NewsCard: React.FC<NewsCardProps> = ({ data }) => {
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
      badges={[<DataBadge date={data.date} format={data.format} />]}
    >
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
