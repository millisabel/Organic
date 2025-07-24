import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@/components/ui/Card';
import type { CategoryCardProps } from './types';
import CardHeader from '@/components/ui/Card/components/CardHeader';
import CardContent from '@/components/ui/Card/components/CardContent';
import Image from '@/components/ui/Image';
import Title from '@/components/ui/Typography/Title';

const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
  const { name, imageUrl } = data;
  return (
    <Link to={`/shop?category=${name}`} data-component="CategoryCard" className="w-full">
      <Card nameComponent="CategoryCard" variant="notShadow" className="group bg-transparent">
        <CardHeader className="overflow-hidden p-2 group-hover:rounded-[150px] transition-all duration-500 will-change-rounded">
          <Image
            src={imageUrl}
            alt={name}
            folder="categories"
            className="rounded-[30px] aspect-square bg-white overflow-hidden group-hover:scale-110 transition-all duration-1000"
            imageClassName="object-scale-down"
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
