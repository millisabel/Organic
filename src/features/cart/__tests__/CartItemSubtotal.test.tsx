import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import CartItemSubtotal from './CartItemSubtotal';

test('renders product name and subtotal', () => {
  render(<CartItemSubtotal price={10} quantity={2} />);
  expect(screen.getByText('$20.00')).toBeInTheDocument();
});
