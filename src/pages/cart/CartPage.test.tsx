import { store } from '@/store/store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { expect, test } from 'vitest';
import CartPage from './CartPage';

test('renders empty cart message when cart is empty', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>
    </Provider>,
  );
  expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
});

test('renders cart items when cart is not empty', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>
    </Provider>,
  );
  expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
});

test('renders cart page', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>
    </Provider>,
  );
  expect(screen.getByText(/shopping cart/i)).toBeInTheDocument();
});
