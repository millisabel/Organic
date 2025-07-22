import DataBadge from '@/components/shared/Badge/DataBadge/DataBadge';
import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import UserIcon from '@/components/shared/Icon/UserIcon';
import AuthorDisplay from '@/components/shared/Post/AuthorDisplay';
import Button from '@/components/ui/Button/Button';
import Card from '@/components/ui/Card';
import CardContent from '@/components/ui/Card/components/CardContent';
import CardHeader from '@/components/ui/Card/components/CardHeader';
import Image from '@/components/ui/Image';
import Paragraph from '@/components/ui/Typography/Paragraph';
import Title from '@/components/ui/Typography/Title';
import React from 'react';
import { Link } from 'react-router-dom';
import type { NewsCardProps } from './types';

const NewsCard: React.FC<NewsCardProps> = ({ data, slots = {} }) => {
  const { title, imageUrl, author, date, description, id } = data;

  return (
    <Card
      className="relative min-w-[300px] max-w-[670px] h-auto mb-[120px] md:mb-[170px] overflow-visible"
      nameComponent="NewsCard"
    >
      {slots.badge || <DataBadge date={date} className="absolute top-4 left-4" />}

      <CardHeader>
        <Image
          src={imageUrl}
          alt={title}
          folder="news"
          className="object-cover w-full h-full rounded-xl"
        />
      </CardHeader>
      <CardContent className="absolute -bottom-[100px] md:-bottom-[150px] z-10 lg:right-5 lg:left-5 w-full lg:w-auto p-4 md:p-10 lg:p-14 items-start bg-white  rounded-b-xl lg:rounded-xl shadow-lg">
        {slots.author || (
          <AuthorDisplay
            author={author}
            label="By "
            className="mb-4"
            icon={<UserIcon variant="default" size="xs" className="text-yellow-300" />}
          />
        )}

        <Title level={3} variant="cardTitle" className="text-primary mb-2 line-clamp-1">
          {title}
        </Title>
        <Paragraph className="items-end text-sm text-gray-600 mb-8 line-clamp-3">
          {description}
        </Paragraph>

        {slots.button || (
          <Button asChild variant="accent" className="w-auto">
            <Link to={`/blog/${id}`}>
              Read More <ArrowIcon variant="arrow" size="md" />
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default NewsCard;
