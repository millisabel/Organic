import { MemoryRouter } from 'react-router-dom';
import CartButton from './CartButton';

export default {
  title: 'Button/Features/Cart/Buttons/CartButton',
  component: CartButton,
  decorators: [
    (Story: React.ComponentType) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const CartButtonDefault = () => <CartButton count={0} />;
export const CartButtonWithCount = () => <CartButton count={10} />;
