import React from 'react';

import { Button } from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Rating from '@/components/ui/Rating';

export interface IProduct {
  id: string | number;
  category: string;
  name: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  rating: number; // 0-5
}

interface IProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const { category, name, price, oldPrice, imageUrl, rating } = product;

  return (
    <Card className="font-sans text-left w-[335px] h-[485px] bg-background group flex flex-col justify-between">
      <div className="relative overflow-hidden">
        <div className="absolute top-5 left-5 z-10">
          <Button
            onClick={() => console.log(`Filter by: ${category}`)}
            className="h-[30px] min-w-[100px] !text-[15px] font-semibold !font-sans !bg-primary !text-white !rounded-lg hover:!bg-accent hover:!text-primary focus-visible:ring-transparent"
          >
            {category}
          </Button>
        </div>
        <div className="w-full h-[324px]">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
      <div className="p-5 bg-transparent">
        <h3 className="text-xl font-semibold font-roboto text-primary mb-3.5">{name}</h3>
        <div className="flex justify-between items-center border-t border-neutral-300 pt-3.5">
          <div className="flex items-center gap-2">
            {oldPrice && (
              <p className="text-neutral-400 line-through font-semibold text-[15px] font-sans">
                ${oldPrice.toFixed(2)}
              </p>
            )}
            <p className="text-primary font-bold text-lg font-sans">${price.toFixed(2)}</p>
          </div>
          <Rating rating={rating} />
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
