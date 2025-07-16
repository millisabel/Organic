import { MemoryRouter } from 'react-router-dom';
import GoToCartButton from './GoToCartButton';

export default {
  title: 'Button/Features/Cart/Buttons/GoToCartButton',
  component: GoToCartButton,
  decorators: [
    (Story: React.ComponentType) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const GoToCartButtonDefault = () => <GoToCartButton />;
export const GoToCartButtonShopSingle = () => <GoToCartButton mode="shopSingle" />;
export const GoToCartButtonShopCompact = () => <GoToCartButton mode="shopCompact" />;
