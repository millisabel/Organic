import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import EmptyCart from './EmptyCart';
import { MemoryRouter } from 'react-router-dom';

test('renders empty cart message and link', () => {
  render(
    <MemoryRouter>
      <EmptyCart />
    </MemoryRouter>,
  );
  expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /go to shop/i })).toBeInTheDocument();
});
