import React from 'react';

import CartIcon from '@/components/icons/CartIcon';
import CheckIcon from '@/components/icons/CheckIcon';
import SpinnerIcon from '@/components/icons/SpinnerIcon';
import { Button } from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Rating from '@/components/ui/Rating';
import { cn } from '@/utils/helpers';

export interface IProduct {
  id: string | number;
  category: string;
  name: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  rating: number; // 0-5
  isOutOfStock?: boolean;
}

interface IProductCardProps {
  product: IProduct;
  isInCart?: boolean;
  isLoading?: boolean;
  onAddToCart?: (id: string | number) => void;
}

const ProductCard: React.FC<IProductCardProps> = ({
  product,
  isInCart = false,
  isLoading = false,
  onAddToCart = () => {},
}) => {
  const { id, category, name, price, oldPrice, imageUrl, rating, isOutOfStock } = product;

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onAddToCart(id);
  };

  return (
    <Card
      className={cn(
        'font-sans text-left w-[335px] h-[550px] bg-background group flex flex-col justify-between transition-all',
        {
          'border-2 border-green-600 shadow-lg': isInCart,
          'filter grayscale opacity-70 pointer-events-none': isOutOfStock,
        },
      )}
    >
      <div>
        <div className="relative overflow-hidden">
          {isOutOfStock && (
            <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-10">
              <span className="text-primary font-bold text-xl bg-white/70 px-4 py-2 rounded-lg">
                Out of Stock
              </span>
            </div>
          )}
          <div className="absolute top-5 left-5 z-10">
            <Button
              onClick={() => console.log(`Filter by: ${category}`)}
              className="h-[30px] min-w-[100px] !text-[15px] font-semibold !font-sans !bg-primary !text-white !rounded-lg hover:!bg-accent hover:!text-primary focus-visible:ring-transparent"
            >
              {category}
            </Button>
          </div>
          <div className="h-[324px]">
            <img
              src={imageUrl}
              alt={name}
              className="will-change-contents mx-auto h-full object-cover transition-all duration-300 group-hover:scale-110 drop-shadow-xl"
            />
          </div>
        </div>
        <div className="p-5 bg-transparent">
          <h3 className="text-xl font-semibold font-roboto text-primary mb-3.5 h-14">{name}</h3>
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
      </div>

      <div className="px-5 pb-5">
        <Button
          onClick={handleAddToCart}
          disabled={isInCart || isLoading || isOutOfStock}
          className={cn(
            'w-full !rounded-lg !font-sans !text-[15px] h-12 flex items-center justify-center',
            {
              'cursor-default !bg-green-100 !text-green-700': isInCart,
              'cursor-wait !bg-gray-200': isLoading,
              'cursor-not-allowed !bg-neutral-200 !text-neutral-500': isOutOfStock,
              'hover:!bg-accent hover:!text-primary': !isInCart && !isLoading && !isOutOfStock,
            },
          )}
        >
          {isOutOfStock ? (
            'Out of Stock'
          ) : isLoading ? (
            <SpinnerIcon />
          ) : isInCart ? (
            <>
              <CheckIcon className="w-5 h-5 mr-2" /> In Cart
            </>
          ) : (
            <>
              <CartIcon className="w-5 h-5 mr-2" /> Add to Cart
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
