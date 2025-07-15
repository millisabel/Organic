import { MemoryRouter } from 'react-router-dom';
import GoToCartButton from './GoToCartButton';

export default {
  title: 'Features/Cart/GoToCartButton',
  component: GoToCartButton,
  decorators: [
    (Story: React.ComponentType) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = () => <GoToCartButton />;
export const ShopSingle = () => <GoToCartButton mode="shopSingle" />;
export const ShopCompact = () => <GoToCartButton mode="shopCompact" />;
