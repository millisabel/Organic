import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@/components/ui/Card';

export interface ICategory {
  id: number;
  name: string;
  imageUrl: string;
}

interface CategoryCardProps {
  category: ICategory;
  variant?: 'primary' | 'secondary';
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/shop?category=${category.name}`} data-component="CategoryCard" className="w-full">
      <Card
        variant="category"
        imgClassName="bg-white h-[300px] rounded-[30px] group-hover:rounded-[150px] transition-all duration-1000 will-change-rounded"
        imgProps={{
          folder: 'categories',
          name: category.imageUrl,
          alt: category.name,
        }}
        tabIndex={0}
      >
        <p className="text-xl font-semibold group-hover:scale-125 transition-all duration-1000">
          {category.name}
        </p>
      </Card>
    </Link>
  );
};

export default CategoryCard;
