import { cn, getImageUrl } from '@/utils/helpers';
import React from 'react';

export interface ICategory {
  id: number;
  name: string;
  imageUrl: string;
}

interface CategoryCardProps {
  category: ICategory;
  variant?: 'primary' | 'secondary';
  isActive?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  variant = 'primary',
  isActive = false,
}) => {
  const imageContainerClass =
    variant === 'primary'
      ? 'bg-background rounded-full aspect-square'
      : 'bg-white rounded-3xl aspect-square';

  const cardClasses = cn(
    'flex flex-col items-center gap-5 text-center transition-transform hover:scale-105',
    {
      'scale-105': isActive,
    },
  );

  const imageWrapperClasses = cn(
    'flex items-center justify-center p-8 w-full max-w-[250px] transition-all duration-300',
    imageContainerClass,
    { 'border-4 border-secondary shadow-lg': isActive },
  );

  return (
    <div className={cardClasses}>
      <div className={imageWrapperClasses}>
        <img src={getImageUrl('categories', category.imageUrl)} alt={category.name} />
      </div>
      <p className="text-xl font-semibold">{category.name}</p>
    </div>
  );
};

export default CategoryCard;
