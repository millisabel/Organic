import BadgeButton from '@/components/shared/Card/ProductCard/components/BadgeButton';
import Price from '@/components/shared/Card/ProductCard/components/Price';
import StatusBlock from '@/components/shared/Card/ProductCard/components/StatusBlock';
import Card from '@/components/ui/Card';
import CardFooter from '@/components/ui/Card/components/CardFooter';
import CardHeader from '@/components/ui/Card/components/CardHeader';
import Image from '@/components/ui/Image';
import Rating from '@/components/ui/Rating';
import Title from '@/components/ui/Typography/Title';
import { useNavigate } from 'react-router-dom';
import type { ProductCardCompactProps } from '../types';

const ProductCardCompact = ({
  data,
  isInCart,
  isLoading,
  isOutOfStock,
  isNew,
  handleAddToCartClick,
  handleCategoryClick,
}: ProductCardCompactProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/shop/${data.id}`);
  };

  return (
    <Card
      variant="product"
      state={isOutOfStock ? 'outOfStock' : isNew ? 'new' : 'default'}
      onClick={handleCardClick}
      className="cursor-pointer"
      data-component="ProductCard"
    >
      <CardHeader className="flex-1">
        <BadgeButton
          children={data.category}
          className="absolute top-4 left-4"
          onClick={handleCategoryClick}
        />
        <Image
          src={data.imageName}
          alt={data.title}
          folder="products"
          className="max-h-[350px]"
          imageClassName="object-scale-down"
        />
        <StatusBlock product={data} isInCart={isInCart} className="absolute top-4 right-4" />
      </CardHeader>
      <CardFooter className="flex-col justify-between items-start p-5">
        <Title
          variant="cardTitle"
          level={3}
          className="w-full text-2xl border-b border-neutral-200 pb-4"
        >
          {data.title}
        </Title>
        <div className="flex flex-row gap-2 items-center justify-between w-full">
          <Price price={data.price} oldPrice={data.oldPrice} />
          <Rating rating={data.rating} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCardCompact;
