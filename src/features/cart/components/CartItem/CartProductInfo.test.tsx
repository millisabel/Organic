import type { CartItem } from '@/components/ui/Card/cart';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect, test, vi } from 'vitest';
import CartProductInfo from './CartProductInfo';

vi.mock('@/utils/helpers', () => ({
  getImageUrl: () => 'mocked-url.png',
}));

const mockItem: CartItem = {
  id: 1,
  name: 'Test Product',
  price: 10,
  quantity: 2,
  imageUrl: 'test.png',
};

test('renders product name and subtotal', () => {
  render(
    <MemoryRouter>
      <CartProductInfo item={mockItem} />
    </MemoryRouter>,
  );

  expect(screen.getByText('Test Product')).toBeInTheDocument();

  const img = screen.getByAltText('Test Product');
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('src', 'mocked-url.png');

  const link = screen.getByRole('link');
  expect(link).toHaveAttribute('href', '/shop/1');
  expect(link).toHaveAttribute('aria-label', 'Go to Test Product page');
  expect(link).toHaveAttribute('tabindex', '0');
});
