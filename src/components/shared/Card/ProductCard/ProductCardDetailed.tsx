import AddToCartButton from '@/components/shared/Button/AddToCartButton';
import Card from '@/components/ui/Card';
import CardContent from '@/components/ui/Card/components/CardContent';
import CardFooter from '@/components/ui/Card/components/CardFooter';
import CardHeader from '@/components/ui/Card/components/CardHeader';
import Input from '@/components/ui/Form/Input';
import Label from '@/components/ui/Form/Label';
import Image from '@/components/ui/Image';
import Rating from '@/components/ui/Rating';
import Title from '@/components/ui/Typography/Title';
import { useCartActions } from '@/features/cart/hooks';
import { selectIsItemInCart, selectIsItemLoading } from '@/features/cart/model';
import { useCategoryNavigation } from '@/hooks/useCategoryNavigation';
import { useAppSelector } from '@/store/hooks';
import { useState } from 'react';
import BadgeButton from './components/BadgeButton';
import Price from './components/Price';
import StatusBlock from './components/StatusBlock';
import type { ProductCardProps } from './types';

const ProductCardDetailed = ({ data }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { navigateToCategory } = useCategoryNavigation();
  const { handleAddToCart } = useCartActions();

  const isInCart = useAppSelector((state) => selectIsItemInCart(state, data.id));
  const isLoading = useAppSelector((state) => selectIsItemLoading(state, data.id));

  const handleCategoryClick = () => {
    navigateToCategory(data.category);
  };

  const handleAddToCartClick = () => {
    handleAddToCart(data, quantity);
  };

  return (
    <Card
      className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      variant="productDetailed"
      data-component="ProductCardDetailed"
    >
      <Image
        src={data.imageName}
        alt={data.title}
        folder="products"
        className="bg-background rounded-3xl p-6 m-auto h-auto max-w-[300px] lg:max-w-none"
        imageClassName="object-scale-down aspect-square"
      />

      <div className="lg:col-span-2 flex-1 flex flex-col gap-10 justify-between items-start p-5">
        <CardHeader className="w-full items-start">
          <div className="flex lg:flex-row items-center justify-end gap-2 w-full mb-8">
            <StatusBlock product={data} isInCart={isInCart} className="lg:flex-row mr-auto" />
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-lg text-primary font-bold">Category:</span>
              <BadgeButton children={data.category} className="" onClick={handleCategoryClick} />
            </div>
          </div>
          <Title
            variant="cardTitle"
            level={3}
            className="w-full text-2xl border-b border-neutral-200 pb-4"
          >
            {data.title}
          </Title>
          <Rating rating={data.rating} />
          <Price price={data.price} oldPrice={data.oldPrice} />
        </CardHeader>
        <CardContent className="items-start justify-start mb-10">
          <p>{data.description}</p>
        </CardContent>
        <CardFooter className="flex-col md:flex-row justify-end items-center gap-8 md:ml-auto w-full">
          <form
            name="quantity"
            className="flex flex-row justify-between md:justify-start items-center gap-4 w-full"
          >
            <Label htmlFor="quantity" className="text-lg text-primary font-bold">
              Quantity:
            </Label>
            <Input
              id="quantity"
              type="number"
              value={quantity}
              min={1}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
              disabled={isLoading}
              variant="quantity"
              className="h-[56px] w-min max-w-[100px]"
            />
          </form>

          <AddToCartButton
            isInCart={isInCart}
            isLoading={isLoading}
            isOutOfStock={!!data.isOutOfStock}
            variant="default"
            className="w-full md:w-min mx-auto md:mx-0"
            onClick={handleAddToCartClick}
          />
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProductCardDetailed;
