import Card from '@/components/ui/Card';
import CardContent from '@/components/ui/Card/components/CardContent';
import CardHeader from '@/components/ui/Card/components/CardHeader';
import Image from '@/components/ui/Image';
import Title from '@/components/ui/Typography/Title';
import { useScrollToElement } from '@/hooks';
import React from 'react';
import { Link } from 'react-router-dom';
import type { CategoryCardProps } from './types';

const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
  const { scrollToElement } = useScrollToElement({ delay: 300 });
  const handleClick = () => {
    scrollToElement('[id="shop"]');
  };
  const { name, imageUrl, imageSize } = data;

  return (
    <Link
      to={`/shop?category=${name}`}
      data-component="CategoryCard"
      className="w-full"
      onClick={handleClick}
    >
      <Card nameComponent="CategoryCard" variant="notShadow" className="group bg-transparent">
        <CardHeader className="overflow-hidden p-2 group-hover:rounded-[150px] transition-all duration-500 will-change-rounded">
          <Image
            src={imageUrl}
            alt={name}
            folder="categories"
            className="rounded-[30px] aspect-square bg-white overflow-hidden group-hover:scale-110 transition-all duration-1000"
            imageClassName="object-scale-down"
            width={imageSize?.width || 300}
            height={imageSize?.height || 300}
          />
        </CardHeader>
        <CardContent className="p-4">
          <Title
            variant="cardTitle"
            className="text-white group-hover:scale-125 transition-all duration-1000"
          >
            {name}
          </Title>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
