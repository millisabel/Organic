import AuthorDisplay from '@/components/shared/AuthorDisplay';
import { Button } from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ArrowIcon from '@/components/ui/Icon/ArrowIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import DataBadge from '../../Badge/DataBadge';
import type { NewsCardProps } from './types';

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
        <Button asChild variant="accent" className="mt-auto">
          <Link to={`/blog/${data.id}`}>
            Read More <ArrowIcon variant="arrow" size="md" className="ml-2" />
          </Link>
        </Button>
      </>
    </Card>
  );
};

export default NewsCard;
