import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import CartIcon from '@/components/ui/Icon/CartIcon';
import CheckIcon from '@/components/ui/Icon/CheckIcon';
import SpinnerIcon from '@/components/ui/Icon/SpinnerIcon';
import Rating from '@/components/ui/Rating';
import { removeItem } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';
import { cardVariants } from './variants';
import TrashButton from '../Button/TrashButton';

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
              <Button
                onClick={handleCategoryClick}
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

        <div className="px-5 pb-5 flex items-center gap-2">
          <Button
            onClick={handleAddToCart}
            disabled={isInCart || isLoading || isOutOfStock}
            variant={
              isInCart
                ? 'productInCart'
                : isLoading
                  ? 'productLoading'
                  : isOutOfStock
                    ? 'productOutOfStock'
                    : 'product'
            }
            size="product"
          >
            {isOutOfStock ? (
              'Out of Stock'
            ) : isLoading ? (
              <SpinnerIcon variant="spinner" />
            ) : isInCart ? (
              <>
                <CheckIcon className="w-5 h-5 mr-2" /> In Cart
              </>
            ) : (
              <>
                <CartIcon viewBox="0 0 27 24" className="w-5 h-5 mr-2" /> Add to Cart
              </>
            )}
          </Button>
          {isInCart && <TrashButton handleRemove={handleRemove} />}
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
