import { store } from '@/store';
import { getStoryDescription } from '@/utils/storiesHelpers';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from './ProductCard';

export default {
  title: 'Components/Card/Shared/ProductCard',
  component: ProductCard,
  decorators: [
    (Story: React.ComponentType) => (
      <BrowserRouter>
        <Provider store={store}>
          <Story />
        </Provider>
      </BrowserRouter>
    ),
  ],
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
  id: 1,
  title: 'Product Title',
  description: 'Product Description',
  imageName: 'Banana.webp',
  price: 100,
  oldPrice: 110,
  rating: 4.5,
  category: 'Fruits',
  isOutOfStock: false,
  isNew: true,
};

export const Default = () => <ProductCard data={data} />;
export const OutOfStock = () => <ProductCard data={data} view="detailed" />;
