import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Card from '@/components/ui/Card';
import Rating from '@/components/ui/Rating';
import { removeItem } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';
import AddToCartButton from '../Button/AddToCartButton';
import TrashButton from '../Button/TrashButton';
import { cardVariants } from './variants';
import BadgeButton from '../Badge/BadgeButton';

export interface IProduct {
  id: string | number;
  category: string;
  name: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  rating: number; // 0-5
  isOutOfStock?: boolean;
  description?: string;
}

interface IProductCardProps {
  product: IProduct;
  isInCart?: boolean;
  isLoading?: boolean;
  onAddToCart: (product: IProduct) => void;
}

const ProductCard: React.FC<IProductCardProps> = ({
  product,
  isInCart = false,
  isLoading = false,
  onAddToCart,
}) => {
  const { id, category, name, price, oldPrice, imageUrl, rating, isOutOfStock } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCategoryClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/shop?category=${category}`);
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
  };

  const handleRemove = () => {
    dispatch(removeItem(product.id));
  };

  let variant: 'isInCart' | 'isOutOfStock' | 'product' = 'product';
  if (isInCart) variant = 'isInCart';
  else if (isOutOfStock) variant = 'isOutOfStock';

  return (
    <Link to={`/shop/${id}`} className="block w-full max-w-[335px] mx-auto">
      <Card
        variant="product"
        size="product"
        className={cardVariants({ variant })}
        data-component="ProductCard"
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
              <BadgeButton category={category} handleCategoryClick={handleCategoryClick} />
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

        <div className="px-5 pb-5 flex items-center gap-2">
          <AddToCartButton
            isInCart={isInCart}
            isLoading={isLoading}
            isOutOfStock={!!isOutOfStock}
            onClick={handleAddToCart}
          />
          {isInCart && <TrashButton handleRemove={handleRemove} />}
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
