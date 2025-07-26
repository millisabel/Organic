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
import ActionsBlock from '../elements/ActionsBlock';
import type { ProductCardDetailedProps } from '../types';

const ProductCardDetailed = ({
  data,
  isSale,
  isOutOfStock,
  isNew,
  isInCart,
  isLoading,
  quantity,
  setQuantity,
  handleAddToCartClick,
  handleCategoryClick,
  handleRemoveClick,
}: ProductCardDetailedProps) => {
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
            <StatusBlock
              product={data}
              isInCart={isInCart}
              isOutOfStock={isOutOfStock}
              isNew={isNew}
              isSale={isSale}
              className="lg:flex-row mr-auto"
            />
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
          <ActionsBlock
            mode="detailed"
            quantity={quantity}
            isInCart={isInCart}
            isLoading={isLoading}
            isOutOfStock={isOutOfStock}
            handleAddToCartClick={handleAddToCartClick}
            handleRemoveClick={handleRemoveClick}
            handleQuantityChange={(e) =>
              setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))
            }
          />
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProductCardDetailed;
