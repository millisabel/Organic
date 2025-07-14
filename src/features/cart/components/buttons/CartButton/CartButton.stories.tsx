import { MemoryRouter } from 'react-router-dom';
import CartButton from './CartButton';

export default {
  title: 'Features/Cart/Buttons/CartButton',
  component: CartButton,
};

export const Default = () => (
  <MemoryRouter>
    <CartButton count={0} />
  </MemoryRouter>
);
export const WithCount = () => (
  <MemoryRouter>
    <CartButton count={10} />
  </MemoryRouter>
);
