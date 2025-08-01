import Card from '@/components/ui/Card';
import CardContent from '@/components/ui/Card/components/CardContent';
import CardFooter from '@/components/ui/Card/components/CardFooter';
import CardHeader from '@/components/ui/Card/components/CardHeader';
import Image from '@/components/ui/Image';
import Rating from '@/components/ui/Rating';
import Title from '@/components/ui/Typography/Title';
import BadgeButton from '@/features/products/components/ProductCard/elements/BadgeButton';
import Price from '@/features/products/components/ProductCard/elements/Price';
import StatusBlock from '@/features/products/components/ProductCard/elements/StatusBlock';
import { useScrollToElement } from '@/hooks';
import { useNavigate } from 'react-router-dom';
import ActionsBlock from '../elements/ActionsBlock';
import type { ProductCardCompactProps } from '../types';

const ProductCardCompact = ({
  data,
  isInCart,
  isLoading,
  isSale,
  isOutOfStock,
  isNew,
  handleRemoveClick,
  handleAddToCartClick,
  handleCategoryClick,
}: ProductCardCompactProps) => {
  const navigate = useNavigate();
  const { scrollToElement } = useScrollToElement({ delay: 300 });

  const handleCardClick = () => {
    navigate(`/shop/${data.id}`);
    scrollToElement('[id="product"]');
  };

  return (
    <Card
      variant="product"
      state={isOutOfStock ? 'outOfStock' : isNew ? 'new' : isSale ? 'sale' : 'default'}
      onClick={handleCardClick}
      className="cursor-pointer"
      data-component="ProductCard"
    >
      <CardHeader className="flex-1">
        <BadgeButton
          children={data.category}
          className="absolute top-4 left-4 lg:left-2"
          onClick={handleCategoryClick}
        />
        <Image
          src={data.imageName}
          alt={data.title}
          folder="products"
          className="max-h-[350px]"
          imageClassName="object-scale-down"
          width={data.imageSize?.width || 300}
          height={data.imageSize?.height || 300}
        />
        <StatusBlock
          product={data}
          isInCart={isInCart}
          isOutOfStock={isOutOfStock}
          isSale={isSale}
          isNew={isNew}
          className="absolute top-4 right-4 lg:right-2"
        />
      </CardHeader>
      <CardContent className="p-5">
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
      </CardContent>
      <CardFooter className="p-5">
        <ActionsBlock
          isInCart={isInCart}
          isLoading={isLoading}
          isOutOfStock={isOutOfStock}
          handleAddToCartClick={handleAddToCartClick}
          handleRemoveClick={handleRemoveClick}
        />
      </CardFooter>
    </Card>
  );
};

export default ProductCardCompact;
