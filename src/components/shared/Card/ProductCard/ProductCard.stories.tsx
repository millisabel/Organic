import { getStoryDescription } from '@/utils/storiesHelpers';
import ProductCard from './ProductCard';

export default {
  title: 'Components/Card/Shared/ProductCard',
  component: ProductCard,
  parameters: {
    docs: {
      description: {
        inheritFrom: 'Card',
        component: getStoryDescription({
          source: 'src/components/shared/Card/ProductCard/ProductCard.stories.tsx',
        }),
      },
    },
  },
};

const data = {
  title: 'Product Title',
  description: 'Product Description',
  image: 'Banana.webp',
  price: 100,
  oldPrice: 110,
  rating: 4.5,
  category: 'Fruits',
  isOutOfStock: false,
  isNew: true,
};

export const Default = () => <ProductCard data={data} />;
