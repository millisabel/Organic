import type { CartItem } from '@/components/ui/Card/cart';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect, test, vi } from 'vitest';
import CartItemDesktop from './CartItemDesktop';

const mockItems: CartItem[] = [
  {
    id: 1,
    name: 'Test Product',
    price: 10,
    quantity: 2,
    imageUrl: 'test.png',
  },
];

test('renders product name and subtotal', () => {
  render(
    <MemoryRouter>
      <CartItemDesktop
        cartItems={mockItems}
        handleQuantityChange={vi.fn()}
        handleRemove={vi.fn()}
      />
    </MemoryRouter>,
  );
  expect(screen.getByText('Test Product')).toBeInTheDocument();
  expect(screen.getByText('$20.00')).toBeInTheDocument();
});

test('calls handleRemove when remove button is clicked', () => {
  const handleRemove = vi.fn();
  render(
    <MemoryRouter>
      <CartItemDesktop
        cartItems={mockItems}
        handleQuantityChange={vi.fn()}
        handleRemove={handleRemove}
      />
    </MemoryRouter>,
  );
  fireEvent.click(screen.getByLabelText(/remove item/i));
  expect(handleRemove).toHaveBeenCalledWith(1);
});
